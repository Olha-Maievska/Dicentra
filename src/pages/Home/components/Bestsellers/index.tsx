import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { getFlowers, setFlowers } from '@/features/flowers/flowersSlice'
import { IFlowerItem, IFlowerKind } from '@/common/dto/getFlowersDto'
import FlowersItem from '@/common/components/FlowersItem'
import { flowersData } from '@/pages/Bouquets/data'

const Bestsellers = () => {
  const { flowers, list } = useAppSelector((state) => state.flowers)
  const [filteredList, setFilteredList] = useState<IFlowerKind[]>([])
  const dispatch = useAppDispatch()
  const [tabInd, setTabInd] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleTabClick = (index: number, content: IFlowerItem[]) => {
    setLoading(true)
    setTabInd(index)
    dispatch(setFlowers(content))

    setTimeout(() => setLoading(false), 300)
  }

  useEffect(() => {
    dispatch(getFlowers(flowersData))
    setTabInd(0)
    setFilteredList(list.filter((item) => item.bestsellers))
  }, [dispatch, list])

  return (
    <section className="bg-light py-16 mb-26">
      <div className="container">
        <h2 className="text-4xl mb-8 text-center font-medium">
          Our bestsellers
        </h2>

        <ul className="flex w-96 flex-row justify-between mx-auto mb-8">
          {filteredList?.map((tab, ind) => {
            return (
              <li
                key={tab.id}
                className={`${
                  tabInd === ind
                    ? 'text-dark after:bg-dark'
                    : 'text-gold after:bg-gold after:bg-btnPressedGold   hover:text-btnPressedGold'
                } cursor-pointer text-lg relative pb-1 after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0`}
                onClick={() => handleTabClick(ind, tab.flowers)}
              >
                {tab.title}
              </li>
            )
          })}
        </ul>

        <div className={`flex justify-between transition-opacity`}>
          {flowers?.map((elem) => {
            if (elem.IsBestsellers) {
              return (
                <FlowersItem key={elem.id} data={elem} isLoading={loading} />
              )
            } else return null
          })}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
