import { Dispatch, FC, useState } from 'react'
import RateIcon from '@/common/UI/Buttons/RateIcon'

interface RatingProps {
  count: number
  currentIndex: number
  setCurrentIndex: Dispatch<React.SetStateAction<number>>
}

const Rating: FC<RatingProps> = ({ count, currentIndex, setCurrentIndex }) => {
  const [hoverIndex, setHoverIndex] = useState<number>(0)
  const stars = Array(count).fill(0)

  return (
    <div className="flex">
      {stars.map((star, index) => {
        const currentStyle = index < currentIndex ? { fill: '#f873af' } : {}
        const hoverStyle = index < hoverIndex ? { fill: '#f873af' } : {}
        return (
          <div
            key={`${star}${index}`}
            className="mr-1 cursor-pointer"
            onClick={() => setCurrentIndex(index + 1)}
            onMouseMove={() => setHoverIndex(index + 1)}
            onMouseOut={() => setHoverIndex(0)}
          >
            <RateIcon styles={{ ...currentStyle, ...hoverStyle }} />
          </div>
        )
      })}
    </div>
  )
}

export default Rating
