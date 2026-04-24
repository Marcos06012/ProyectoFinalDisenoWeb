
import { Duffel } from '@duffel/api';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // 1. Validar que el token existe
    if (!process.env.DUFFEL_ACCESS_TOKEN) {
        console.error("ERROR: DUFFEL_ACCESS_TOKEN no está definido en .env.local");
        return NextResponse.json({ error: "Configuración de API faltante" }, { status: 500 });
    }

    const duffel = new Duffel({
        token: process.env.DUFFEL_ACCESS_TOKEN,
    });

    const { searchParams } = new URL(request.url);
    const destination = searchParams.get('destination');

    try {
        console.log("Buscando vuelos para:", destination);

        const offerRequest = await duffel.offerRequests.create({
            slices: [{
                origin: "MAD",
                destination: destination,
                departure_date: "2026-06-01",
            }],
            passengers: [{ type: "adult" }],
            cabin_class: "economy",
        });


        console.log("Respuesta completa de Duffel:", JSON.stringify(offerRequest.data, null, 2));

        return NextResponse.json(offerRequest.data);
    } catch (error) {
        // 2. ESTO ES LO QUE NECESITAMOS VER
        console.error("DETALLE DEL ERROR DE DUFFEL:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}