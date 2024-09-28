import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { setReviewsModal } from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import TotalRating from './TotalRating'
import ReviewsItem from './ReviewsItem'

const ReviewsList = () => {
  const dispatch = useAppDispatch()
  const { flowerItem } = useAppSelector((state) => state.flowers)

  const handleAddReview = () => {
    // if (!currentUser) {
    //   dispatch(setLoginModal(true))
    // } else {
    dispatch(setReviewsModal(true))
    // }
  }

  return (
    <div className="font-roboto relative -mt-4 mx-auto border border-gold py-12 px-24">
      <div className="flex items-center justify-between mb-4 mr-4">
        <h2 className="font-medium text-3xl">Reviews</h2>
        <GoldBtn
          text="Write a review"
          styles="w-52 py-4"
          handleClick={handleAddReview}
        />
      </div>

      <TotalRating />

      <div className="mt-6 mr-1">
        {flowerItem?.reviews?.map((review) => (
          <ReviewsItem key={review.userID} review={review} />
        ))}
      </div>

      <div>
        <img
          className="absolute bottom-0 left-0"
          src="/images/fones/leaves.png"
          alt="rating"
        />
        <img
          className="absolute bottom-0 right-0"
          src="/images/fones/tulips.png"
          alt="rating"
        />
      </div>
    </div>
  )
}

export default ReviewsList
