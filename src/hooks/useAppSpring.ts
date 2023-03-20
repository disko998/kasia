import { MotionValue, useSpring } from 'framer-motion'

export default function useAppSpring(value: MotionValue<any>) {
  const spring = useSpring(value, { mass: 1.25, stiffness: 200, damping: 50 })

  return spring
}
