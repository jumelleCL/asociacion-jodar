"use client";

import Summary from "../components/ui/Summary";
import Bar from "../components/ui/Bar"
import React, {useEffect} from "react";
import {FaPlus} from "react-icons/fa";
import {useRouter} from "next/navigation";
import AnimalCard from "../components/ui/AnimalCard";


export default function Home() {
    const router = useRouter();
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
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-wrap gap-10 mx-10 my-20 max-w-full">
                            <AnimalCard />
                            <AnimalCard />
                            <AnimalCard />
                            <AnimalCard />
                        </div>
                    </div></Summary>

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
