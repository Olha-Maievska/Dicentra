import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import { IReviewsItem } from '@/common/dto/getReviewsDto'

interface ReviewsCarouselItemProps {
  data: IReviewsItem
  setItemWidth: Dispatch<SetStateAction<number>> | undefined
}

const ReviewsCarouselItem: FC<ReviewsCarouselItemProps> = ({
  data,
  setItemWidth,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null)

  const { text, wrote } = data

  useEffect(() => {
    if (setItemWidth) {
      setItemWidth(itemRef!.current!.offsetWidth)
    } else return
  }, [setItemWidth])

  return (
    <div className="min-w-[643px] pr-4 h-60" ref={itemRef}>
      <div className="bg-white p-10 flex h-full">
        <img
          className="h-8 w-12 mr-6"
          src="images/icons/comma.svg"
          alt={wrote}
        />
        <div className="text-dark  mt-5">
          <p className="mb-4 font-light">{text}</p>
          <span className="font-semibold text-md">{wrote}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCarouselItem
