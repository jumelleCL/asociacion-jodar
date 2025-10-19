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
  { name: 'Perro', description: 'Amigable', isDisponible: true, url: 'data:image/jpeg;base64,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' },
  { name: 'Gato', description: 'Tranquilo', isDisponible: true, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg' },
  { name: 'Zorro', description: 'Astuto', isDisponible: true, url: 'https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg' },
  { name: 'Conejo', description: 'Rápido', isDisponible: true, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0c_EPB9CwcFXEDhfoe3gMcX2xawCOu1Hyw&s' },
  { name: 'Oso', description: 'Fuerte', isDisponible: true, url: 'https://www.zooplus.es/magazine/wp-content/uploads/2020/10/Gatos-y-roedores-juntos.webp' },
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
      <div className="carousel my-10" ref={listRef}>
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
