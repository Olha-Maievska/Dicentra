import RateIcon from '@/common/UI/Buttons/RateIcon'
import { IReviewItem } from '@/common/dto/getFlowersDto'
import { FC } from 'react'

interface ReviewsItemProps {
  review: IReviewItem
}

const ReviewsItem: FC<ReviewsItemProps> = ({ review }) => {
  return (
    <div className="w-full mb-10 last:mb-0">
      <div className="flex items-center mb-2">
        <div className="text-xl font-medium mr-4">{review.name}</div>
        <div className="flex items-center">
          {Array(review.rating)
            .fill(0)
            .map((r, i) => (
              <div key={`${r}${i}`} className="mr-1">
                <RateIcon styles={{ fill: '#f873af' }} />
              </div>
            ))}
        </div>
      </div>
      <div className="font-ubuntu font-medium text-gold mb-1 text-sm">
        {review.createdAt}
      </div>
      <div>{review.comment}</div>
    </div>
  )
}

export default ReviewsItem
