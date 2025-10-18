import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import styled from 'styled-components'
import AnimalCard from './AnimalCard'

type AnimalProps = {
  name: string
  description: string
  isDisponible: boolean
  url: string
}

const data: AnimalProps[] = [
  { name: 'Perro', description: 'Amigable', isDisponible: true, url: 'https://picsum.photos/200/300' },
  { name: 'Gato', description: 'Tranquilo', isDisponible: true, url: 'https://picsum.photos/200/300' },
  { name: 'Zorro', description: 'Astuto', isDisponible: true, url: 'https://picsum.photos/200/300' },
  { name: 'Conejo', description: 'Rápido', isDisponible: true, url: 'https://picsum.photos/200/300' },
  { name: 'Oso', description: 'Fuerte', isDisponible: true, url: 'https://picsum.photos/200/300' },
]

const AnimalCarousel: React.FC = () => {
  const listRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<gsap.core.Tween | null>(null)
  const draggableRef = useRef<any>(null)
  const singleSetWidthRef = useRef(0)
  const proxyRef = useRef<{ x: number }>({ x: 0 })

  useEffect(() => {
    gsap.registerPlugin(Draggable)
    let resizeObserver: ResizeObserver | null = null

    const init = () => {
      const list = listRef.current
      if (!list) return

      const items = list.querySelectorAll<HTMLDivElement>('.item')
      if (!items.length) return

      const itemWidth = items[0].offsetWidth
      const singleSetCount = items.length / 2
      const singleSetWidth = itemWidth * singleSetCount
      singleSetWidthRef.current = singleSetWidth
      if (singleSetWidth === 0) return

      if (animRef.current) {
        animRef.current.kill()
        animRef.current = null
      }
      if (draggableRef.current) {
        draggableRef.current.kill()
        draggableRef.current = null
      }

      proxyRef.current.x = 0

      animRef.current = gsap.to(proxyRef.current, {
        x: -singleSetWidth,
        ease: 'none',
        duration: 20,
        repeat: -1,
        onUpdate: () => {
          const v = proxyRef.current.x
          const mod = ((v % singleSetWidth) + singleSetWidth) % singleSetWidth
          gsap.set(list, { x: mod - singleSetWidth })
        }
      })

      const instances = Draggable.create(list, {
        type: 'x',
        inertia: true,
        onPress() {
          animRef.current?.pause()
        },
        onDrag() {
          proxyRef.current.x = this.x
          gsap.set(list, { x: this.x })
        },
        onThrowUpdate() {
          proxyRef.current.x = this.x
          gsap.set(list, { x: this.x })
        },
        onRelease() {
          const cur = proxyRef.current.x
          const offset = (((-cur % singleSetWidthRef.current) + singleSetWidthRef.current) % singleSetWidthRef.current) / singleSetWidthRef.current
          animRef.current?.progress(offset)
          animRef.current?.play()
        }
      })
      draggableRef.current = instances[0]
    }

    init()

    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => init())
      if (listRef.current) resizeObserver.observe(listRef.current)
    } else {
      window.addEventListener('resize', init)
    }

    return () => {
      animRef.current?.kill()
      animRef.current = null
      draggableRef.current?.kill()
      draggableRef.current = null
      if (resizeObserver && listRef.current) resizeObserver.unobserve(listRef.current)
      window.removeEventListener('resize', init)
    }
  }, [])

  const handleMouseEnter = () => animRef.current?.pause()
  const handleMouseLeave = () => animRef.current?.play()

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel" ref={listRef}>
        {[...data, ...data].map((animal, i) => (
          <div className="item" key={i}>
            <AnimalCard {...animal} />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  cursor: grab;
  .carousel {
    display: flex;
    width: max-content;
  }
  .item {
    flex: none;
    width: 320px;
    height: 320px;
  }
`

export default AnimalCarousel
