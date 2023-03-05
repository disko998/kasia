import Button from '@/components/buttons/Button'

type Props = {}

export default function Footer({}: Props) {
  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <footer className="container flex flex-col items-center justify-center py-10 text-center">
      <span className="text-xl font-light sm:text-lg">
        Budite slobodni da nas kontaktirate
      </span>
      <div className="flex flex-col">
        <button
          onClick={() => onCopy('office@kasiastudio.rs')}
          className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
        >
          <div className="transition-transform duration-300 group-hover:scale-95 group-active:scale-90">
            OFFICE@KASIASTUDIO.RS
          </div>
          <div className="hidden">Copy</div>
        </button>

        <button
          onClick={() => onCopy('+381 61/1160-549')}
          className="group mt-12 cursor-pointer rounded-2xl bg-white p-5 text-center font-serif text-[2.5rem] text-red-orange transition-colors duration-500 dark:bg-[#181b1e] sm:text-5xl"
        >
          <div className="transition-transform duration-300 group-hover:scale-95 group-active:scale-90">
            +381 61/1160-549
          </div>
        </button>
      </div>

      <div className="mt-12 flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
        <span className="order-2 text-[0.75rem] lg:-order-none">
          Sva prava zadržana. Ⓒ 2023 Kasia Studio
        </span>
        <div className="order-1 mb-6 flex gap-4 lg:-order-none lg:mb-0">
          <Button>YOUTUBE</Button>
          <Button>INSTAGRAM</Button>
          <Button>TIKTOK</Button>
        </div>
        <span className="order-3 text-[0.75rem] lg:-order-none">
          Design & Development - Bluestudio.rs
        </span>
      </div>
    </footer>
  )
}
