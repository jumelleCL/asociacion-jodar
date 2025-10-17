import React, { useState, useEffect, useRef } from "react";
import AnimalCard from "../ui/AnimalCard";

const AnimalGrid = ({ animals }) => {
    const containerWidth = 900; // fijo o calculado con un ref
    const cardWidth = 200;
    const gap = 16;

    const cardsPerRow = Math.floor((containerWidth + gap) / (cardWidth + gap));
    const maxCards = cardsPerRow * 2;

    const visibleAnimals = animals.slice(0, maxCards);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: `${gap}px`,
                maxWidth: containerWidth,
                overflow: "hidden",
            }}
        >
            {visibleAnimals.map((animal) => (
                <AnimalCard
                    key={animal.id}
                    title={animal.title}
                    description={animal.description}
                />
            ))}
        </div>
    );
};

export default AnimalGrid;
