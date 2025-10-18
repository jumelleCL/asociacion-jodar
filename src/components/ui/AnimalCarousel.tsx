import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import AnimalCard from './AnimalCard';

const AnimalCarousel = () => {
    const listRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const cardWrapperRef = useRef(null);
    const [cardSize, setCardSize] = useState({width: 320, height: 320});

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        setTranslateX((prev) => prev + delta);
        setStartX(e.clientX);
        if (listRef.current) {
            listRef.current.style.transform = `translateX(${translateX}px)`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        if (isDragging) handleMouseUp();
    };
    
    useEffect(() => {
        if (!cardWrapperRef.current) return;
        
        const card = cardWrapperRef.current.querySelector('.card');
        if (!card) return;
        
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setCardSize({width: width, height: height});
        });
        
        observer.observe(card);
        
        return() => observer.disconnect();
        
    }, []);
    
    const quantity = 9;

    return (
        <StyledWrapper>
            <div
                className="slider"
                style={{
                    '--width': `${cardSize.width}px`,
                    '--height': `${cardSize.height}px`,
                    '--quantity': quantity,
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`list ${isDragging ? 'paused' : ''}`}
                    ref={listRef}
                >
                    {Array.from({ length: quantity }, (_, i) => (
                        <div
                            key={i}
                            className="item"
                            style={{ '--position': i + 1 }}
                        >
                            <div ref={i === 0 ? cardWrapperRef : null}>
                                <AnimalCard />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .slider {
        width: 100%;
        height: var(--height);
        overflow: hidden;
        cursor: grab;
        user-select: none;
    }

    .slider .list {
        display: flex;
        width: 100%;
        min-width: calc(var(--width) * var(--quantity));
        position: relative;
    }

    .slider .list .item {
        width: var(--width);
        height: var(--height);
        position: absolute;
        left: 100%;
        animation: autoRun 30s linear infinite;
        transition: filter 0.5s;
        animation-delay: calc(
                (30s / var(--quantity)) * (var(--position) - 1) - 30s
        ) !important;
    }

    .slider .list.paused .item {
        animation-play-state: paused !important;
    }

    .slider:hover .item {
        animation-play-state: paused !important;
    }
    
    @keyframes autoRun {
        from {
            left: 100%;
        }
        to {
            left: calc(var(--width) * -1);
        }
    }
`;


export default AnimalCarousel;
