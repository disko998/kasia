import classNames from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  categories: string[]
  selected: string
  type: 'videography' | 'photography'
}

export default function Categories({
  categories,
  selected,
  type = 'photography'
}: Props) {
  return (
    <div className="flex items-center justify-between gap-1 border-t-1 border-silver-brown text-sm font-medium">
      {categories.map(category => (
        <Link
          href={`/${type}/${category}`}
          className={classNames(
            'relative flex flex-1 items-center justify-center py-[15px] capitalize text-black duration-300 dark:text-white',
            {}
          )}
          key={category}
        >
          {category}
          {selected === category && (
            <motion.div
              layoutId="buttonUpperLine"
              className="before absolute top-[-1px] flex h-[1px] w-full items-center justify-center bg-red-orange before:absolute before:h-2 before:w-2 before:rounded-full before:bg-red-orange"
            />
          )}
        </Link>
      ))}
    </div>
  )
}
