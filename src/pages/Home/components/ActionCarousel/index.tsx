import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import FlowersItem from '@/common/components/FlowersItem'
import { ArrowNext, ArrowPrev } from '@/common/UI/Arrows'
import { setActionFlowers } from '@/features/flowers/flowersSlice'

const ActionCarousel = () => {
  const { actionFlowersData } = useAppSelector((state) => state.flowers)
  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)
  const [countSlides, setCountSlides] = useState(5)
  const [itemWidth, setItemWidth] = useState(0)
  const trackWidth = Math.ceil(
    actionFlowersData ? itemWidth * actionFlowersData?.length : 0
  )

  const handlePrevClick = () => {
    if (!offset) return
    setOffset((prev) => prev + itemWidth)
    setCountSlides((prev) => prev - 1)
  }

  const handleNextClick = () => {
    if (countSlides === actionFlowersData?.length) return
    setOffset((prev) => prev - itemWidth)
    setCountSlides((prev) => prev + 1)
  }

  useEffect(() => {
    dispatch(setActionFlowers())
  }, [dispatch])

  return (
    <section className="bg-light py-16 mb-26">
      <div className="container relative">
        <h2 className="text-4xl mb-8 text-center font-medium">
          Promotional offers
        </h2>
        <div className="w-full overflow-x-hidden">
          <div
            className={`flex w-[${trackWidth}px] transition-transform`}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {actionFlowersData?.map((elem, i) => {
              return (
                <FlowersItem
                  key={`${elem.id}${i}`}
                  data={elem}
                  setItemWidth={setItemWidth}
                />
              )
            })}
          </div>
        </div>

        <ArrowPrev
          offset={!!offset}
          handleClick={handlePrevClick}
          cssStyles="top-[225px] -left-2 bg-white border-gold"
        />
        <ArrowNext
          countSlides={countSlides}
          dataLenght={actionFlowersData?.length}
          handleClick={handleNextClick}
          cssStyles="top-[225px] -right-2 bg-white border-gold"
        />
      </div>
    </section>
  )
}

export default ActionCarousel
