import Button from '@/components/buttons/Button'
import classNames from 'classnames'

type Props = {
  categories: string[]
  selected: string
  onClick: (cat: string) => void
}

export default function Categories({ categories, selected, onClick }: Props) {
  const activeClasses =
    'before:absolute before:left-0 before:top-[-1px] before:h-[1px] before:w-full before:bg-red-orange after:absolute after:left-[50%] after:top-[-4px] after:h-[8px] after:w-[8px] after:translate-x-[-50%] after:rounded-full after:bg-red-orange'

  return (
    <div className="flex items-center justify-between gap-1 border-t-1 border-silver-brown text-sm font-medium">
      {categories.map(category => (
        <button
          onClick={() => onClick(category)}
          className={classNames(
            'relative flex-1 py-[15px] text-black duration-300 dark:text-white',
            {
              [activeClasses]: selected === category
            }
          )}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
