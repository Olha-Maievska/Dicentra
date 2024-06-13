import { useEffect, useState } from 'react'
import Characs from './components/Characs'
import Description from './components/Description'
import Delivery from './components/Delivery'

const tabs = ['Characteristics', 'Description', 'Delivery']

const Tabs = () => {
  const [tab, setTab] = useState('')

  useEffect(() => setTab(tabs[0]), [])

  return (
    <div className="mt-8 h-[270px]">
      <ul className="flex justify-between border-b border-light border-solid pb-4 cursor-pointer text-dark">
        {tabs.map((item) => (
          <li
            className={`${tab === item ? 'text-gold after:content-[""] after:absolute after:w-full after:h-[1px] after:left-0 after:-bottom-4 after:bg-gold' : 'text-dark'} transition-all relative w-1/3 text-center`}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-dark">
        {tab === 'Characteristics' ? (
          <Characs />
        ) : tab === 'Description' ? (
          <Description />
        ) : (
          <Delivery />
        )}
      </div>
    </div>
  )
}

export default Tabs
