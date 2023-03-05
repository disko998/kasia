import React, { useEffect, useState } from 'react'

const useDimensions = () => {
  const [dimension, setDimension] = useState<{
    width: number
    height: number
  }>()

  useEffect(() => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }, [])

  return dimension
}

export default useDimensions
