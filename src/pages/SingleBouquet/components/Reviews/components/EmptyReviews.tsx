import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { setReviewsModal } from '@/features/modal/modalSlice'
import { useAppDispatch } from '@/hooks/hooks'

const EmptyReviews = () => {
  const dispatch = useAppDispatch()

  const handleModalContent = () => {
    // if (!currentUser) {
    //   dispatch(setLoginModal(true))
    // } else {
    dispatch(setReviewsModal(true))
    // }
  }

  return (
    <div className="border border-solid border-gold py-12 px-14 flex justify-between items-center">
      <p className="text-dark text-xl">
        There are currently no product reviews yet
      </p>
      <GoldBtn
        text="Write a review"
        styles="w-56 py-4"
        handleClick={handleModalContent}
      />
    </div>
  )
}

export default EmptyReviews
