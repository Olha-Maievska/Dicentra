import { useAppSelector } from '@/hooks/hooks'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

interface TabsProps {
  setDataAtr: Dispatch<SetStateAction<string>>
}
const Tabs: FC<TabsProps> = ({ setDataAtr }) => {
  const { delivery } = useAppSelector((state) => state.order)

  const [tab] = useState(['By courier', 'Pick up in store'])
  const [index, setIndex] = useState(0)

  const handleTabClick = (i: number, data: string) => {
    setIndex(i)
    setDataAtr(data == 'By courier' ? 'byCourier' : 'inStore')
  }

  useEffect(() => {
    if (delivery?.method) {
      if (delivery?.method === 'byCourier') {
        setIndex(0)
      } else {
        setIndex(1)
      }
    }
  }, [delivery?.method])

  return (
    <div className="flex mb-3">
      {tab.map((t, i) => {
        return (
          <div
            key={t}
            className={`${index === i ? 'opacity-1' : 'opacity-50'} font-medium relative mr-14 cursor-pointer pb-4 after:bg-gold after:absolute after:w-full after:h-[1px] after:left-0 after:top-8 transition-all`}
            onClick={() => handleTabClick(i, t)}
          >
            {t}

            {index === i && (
              <img
                className="absolute -right-6 top-2 w-4"
                src="/images/icons/check-black.svg"
                alt="check"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
