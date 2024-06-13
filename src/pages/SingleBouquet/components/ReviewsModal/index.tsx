import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setReviewsModal } from '@/features/modal/modalSlice'
import ReviewsModalForm from './components/ReviewsModalForm'
import Modal from '@/common/components/Modal'

const ReviewsModal = () => {
  const dispatch = useAppDispatch()
  const { flowerItem } = useAppSelector((state) => state.flowers)
  const { reviewsModal } = useAppSelector((state) => state.modal)

  const handleCloseModal = () => {
    dispatch(setReviewsModal(false))
  }

  return (
    <Modal
      isOpen={reviewsModal}
      closeModal={handleCloseModal}
      title={`Write a review about ${flowerItem?.name}`}
    >
      <ReviewsModalForm />
    </Modal>
  )
}

export default ReviewsModal
