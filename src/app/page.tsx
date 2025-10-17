"use client";

import Summary from "../components/ui/Summary";
import React, {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import AnimalGrid from "@/components/Java/CountCards";
export default function Home() {
    const router = useRouter();

    const animals = [
        { id: 1, name: "Perro" },
        { id: 2, name: "Gato" },
        { id: 3, name: "Conejo" },
        { id: 4, name: "Tigre" },
        { id: 5, name: "León" },
        { id: 6, name: "Elefante" },
        { id: 7, name: "Cebra" },
        { id: 8, name: "Jirafa" },
    ];

    return (
        <div>
            <main className="flex min-h-1/2 flex-col items-right justify-between p-24 bg-[#F6F1FB]">
                <Summary
                    title="CONTACTO"
                    description="¿Tenés preguntas? ¡Contactanos!"
                    rout="/admin/dashboard"
                ></Summary>
                
                <div className="border-b border-gray-300 mb-6"></div>

                <Summary
                    title="NOSOTROS"
                    description="Sobre nosotros resumen"
                    rout="/admin/nosotros"
                >
                    <div className="flex justify-start">
                        <AnimalGrid animals={animals}/>
                    </div>
                </Summary>

                <div className="border-b border-gray-300 mb-6"></div>

                <Summary
                    title="CONTACTO"
                    description="¿Tenés preguntas? ¡Contactanos!"
                    rout="/admin/dashboard"
                ></Summary>
            </main>
        </div>
    );
}
