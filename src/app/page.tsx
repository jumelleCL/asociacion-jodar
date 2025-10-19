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
                    title="NOSOTROS"
                    description="Resumen sobre la asociación"
                    rout="/admin/dashboard"
                >
                </Summary>
                
                <div className="border-b border-gray-300 mb-6"></div>

                <Summary
                    title="ANIMALES"
                    description="Algunos animales"
                    rout="/admin/animales"
                >
                    <div className="flex overflow-y-visible overflow-x-hidden gap-6 mt-10">
                        <AnimalCarousel/>
                    </div>
                </Summary>

                <div className="border-b border-gray-300 mb-6"></div>

                <Summary
                    title="CONTACTO"
                    description="Contacto:"
                    rout="/admin/dashboard"
                ></Summary>
            </main>
        </div>
    );
}


