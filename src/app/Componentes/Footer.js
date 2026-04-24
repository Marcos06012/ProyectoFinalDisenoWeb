export default function Footer() {
    return (
        <footer className="bg-[#09092d] text-white py-12">
            <div className="container mx-auto px-4">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} StarFly. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
