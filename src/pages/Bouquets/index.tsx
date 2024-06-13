import { ChangeEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import FlowersItem from '@/common/components/FlowersItem'
import { flowersData } from './data'
import { getFlowers } from '@/features/flowers/flowersSlice'
import { IFlowerItem, IFlowerKind } from '@/common/dto/getFlowersDto'

const Bouquets = () => {
  const { list } = useAppSelector((state) => state.flowers)
  const dispatch = useAppDispatch()

  const [tabInd, setTabInd] = useState(0)
  const [loading, setLoading] = useState(false)
  const [selectedPriceValues] = useState(['from increasing', 'from decreasing'])
  const [selected, setSelected] = useState('')
  const [dataKind, setDataKind] = useState<IFlowerKind | null>(null)

  const handleTabClick = (index: number, item: IFlowerKind) => {
    setLoading(true)
    setTabInd(index)
    setDataKind(item)
    setSelected('')
    setTimeout(() => setLoading(false), 300)
  }

  const handleSelectedPrice = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.value)
    setLoading(true)

    if (typeof dataKind?.flowers !== 'undefined') {
      if (e.currentTarget.value === 'from increasing') {
        setDataKind({
          ...dataKind,
          flowers: dataKind?.flowers
            ?.slice()
            .sort(function (a: IFlowerItem, b: IFlowerItem) {
              if (b.actionPrice) {
                return b.actionPrice - a.price
              } else if (a.actionPrice) {
                return b.price - a.actionPrice
              }
              return b.price - a.price
            }),
        })
      } else {
        setDataKind({
          ...dataKind,
          flowers: dataKind?.flowers
            ?.slice()
            .sort(function (a: IFlowerItem, b: IFlowerItem) {
              if (a.actionPrice) {
                return a.actionPrice - b.price
              } else if (b.actionPrice) {
                return a.price - b.actionPrice
              }
              return a.price - b.price
            }),
        })
      }
    }

    setTimeout(() => setLoading(false), 300)
  }

  useEffect(() => {
    dispatch(getFlowers(flowersData))
    setDataKind(list[0])
  }, [dispatch, list])

  return (
    <section className="pt-48 pb-40 bg-light">
      <div className="container">
        <div className="relative">
          <ul className="flex justify-center mb-8 text-sm font-thin text-dark">
            <li className="pr-1 after:content-['/'] after:pl-1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="" className={'font-medium'}>
                All bouquets
              </NavLink>
            </li>
          </ul>
          <h2 className="text-center text-4xl font-medium mb-9 text-dark">
            All bouquets
          </h2>

          <ul className="flex w-6/12 flex-row justify-between mx-auto mb-8">
            {list?.map((tab, ind) => {
              return (
                <li
                  key={tab.id}
                  className={`${
                    tabInd === ind
                      ? 'text-dark after:bg-dark'
                      : 'text-gold after:bg-gold after:bg-btnPressedGold hover:text-btnPressedGold'
                  } cursor-pointer text-lg relative pb-1 after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0`}
                  onClick={() => handleTabClick(ind, tab)}
                >
                  {tab.title}
                </li>
              )
            })}
          </ul>

          <div className="flex flex-wrap w-10/12 mx-auto">
            {dataKind?.flowers?.map((elem) => (
              <FlowersItem key={elem.id} data={elem} isLoading={loading} />
            ))}
          </div>

          <div className="absolute right-36 top-0 text-dark">
            <select
              name="selectedPrice"
              value={selected}
              className="w-42 focus:outline-transparent bg-white px-3 py-2 rounded-xl"
              onChange={handleSelectedPrice}
            >
              <option className="text-gray-400" aria-label="None" value={''}>
                Sort price
              </option>
              {selectedPriceValues.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bouquets
