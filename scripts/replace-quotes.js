const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const exts = [".js", ".jsx", ".ts", ".tsx", ".html", ".css", ".md"];
const ignoreDirs = ["node_modules", ".git", ".next", "out", "dist"];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (ignoreDirs.includes(file)) continue;
      results = results.concat(walk(filePath));
    } else {
      if (exts.includes(path.extname(file))) results.push(filePath);
    }
  }
  return results;
}

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  // Replace single-quoted strings with double-quoted strings.
  // This is a best-effort replacement and may not cover all edge cases.
  const regex = /"((?:\\.|[^"\\])*)"/g;
  const newContent = content.replace(regex, (_, inner) => {
    // Escape existing double quotes inside
    const escaped = inner.replace(/\"/g, "\\"");
    return `\"${escaped}\"`;
  });
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    return true;
  }
  return false;
}

const files = walk(root);
const modified = [];
for (const f of files) {
  try {
    if (replaceInFile(f)) modified.push(path.relative(root, f));
  } catch (e) {
    console.error("Error processing", f, e.message);
  }
}

console.log("Archivos modificados:", modified.length);
modified.forEach(f => console.log("- ' + f));
