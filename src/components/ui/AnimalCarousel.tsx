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
    const quantity = 9;

    const renderCards = () => {
        const cards = Array.from({length: quantity}, (_, i) => (
            <div key={`card-${i}`} className="item" style={{'--position': i + 1}}>
                <div ref={i === 0 ? cardWrapperRef : null}>
                    <AnimalCard/>
                </div>
            </div>
        ));
        
        return [
            ...cards.slice(-3),
            ...cards,
            ...cards.slice(0, 3),
        ];
    };
        

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        const newTranslateX = translateX + delta;
        setTranslateX(newTranslateX);
        setStartX(e.clientX);

        if (listRef.current) {
            listRef.current.style.transition = 'none';
            listRef.current.style.transform = `translateX(${newTranslateX}px)`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);

        const maxIndex = quantity + 3;
        const minIndex = 2;

        const currentIndex = Math.round(-translateX / cardSize.width);

        if (currentIndex >= maxIndex) {
            const resetX = -cardSize.width * 3;
            setTranslateX(resetX);
            if (listRef.current) {
                listRef.current.style.transition = 'none';
                listRef.current.style.transform = `translateX(${resetX}px)`;
            }
        } else if (currentIndex <= minIndex - 1) {
            const resetX = -cardSize.width * (quantity + 2);
            setTranslateX(resetX);
            if (listRef.current) {
                listRef.current.style.transition = 'none';
                listRef.current.style.transform = `translateX(${resetX}px)`;
            }
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) handleMouseUp();
    };
    
    useEffect(() => {
        if (!cardWrapperRef.current) return;
        const list = listRef.current;
        if (!list) return;
        
        const totalWidth = cardSize.width * (quantity + 6);
        const visibleWidth = cardSize.width * quantity;
        
        list.style.transform = `translateX(-${cardSize.width * 3}px)`;
        setTranslateX(-cardSize.width * 3);
        
        const card = cardWrapperRef.current.querySelector('.card');
        if (!card) return;
        
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setCardSize({width: width, height: height});
        });
        
        observer.observe(card);
        
        return() => observer.disconnect();
        
    }, [cardSize.width, quantity]);

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
        width: calc(var(--width) * var(--quantity));
        height: calc(var(--height) * 1.5) ;
        overflow: hidden;
        cursor: grab;
        user-select: none;
    }

    .slider .list {
        display: flex;
        width: 120%;
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
