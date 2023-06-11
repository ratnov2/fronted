import React, { useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  useEffect(() => {
      window.addEventListener('scroll', () =>
        setScroll({ x: 4, y: window.scrollY })
      )
    
])
  const isBrowser = typeof window !== `undefined`

  return { x: scroll.x, y: scroll.y }
}

export default useScrollPosition
