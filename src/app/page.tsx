"use client";

import Summary from "../components/ui/Summary";
import React from "react";
import {useRouter} from "next/navigation";
import AnimalCarousel from "../components/ui/AnimalCarousel";
import AnimalCard from "../components/ui/AnimalCard";

export default function Home() {
    const router = useRouter();
    
    return (
        <div>
            <main className="flex min-h-1/2 flex-col items-right justify-between p-24 bg-[#F6F1FB]">
                <Summary
                    title="CONTACTO"
                    description="¿Tenés preguntas? ¡Contáctanos!"
                    rout="/admin/dashboard"
                >
                    <div className="flex overflow-y-visible gap-6 justify-center my-50 mx-20">
                        <AnimalCard
                            name={"gustabo"}
                            description={"Aloooo"}
                            isDisponible={true} 
                            url={""}                        
                        >                           
                        </AnimalCard>
                    </div>
                </Summary>
                
                <div className="border-b border-gray-300 mb-6"></div>

                <Summary
                    title="NOSOTROS"
                    description="Sobre nosotros resumen"
                    rout="/admin/nosotros"
                >
                    <div className="flex overflow-y-visible overflow-x-hidden gap-6 mt-10">
                        <AnimalCarousel>
                        </AnimalCarousel>
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


