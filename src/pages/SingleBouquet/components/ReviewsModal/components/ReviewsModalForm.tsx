import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setReviewsModal } from '@/features/modal/modalSlice'
import Rating from '@/common/UI/Icons/Rating'
import { addReview } from '@/features/flowers/flowersSlice'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import { addCurrentUserReview } from '@/features/users/usersSlice'

const ReviewsModalForm = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useAppSelector((state) => state.users)
  const { flowerItem } = useAppSelector((state) => state.flowers)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser?.name || '',
      comment: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const date = new Date().toLocaleString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      const comment = {
        userID: currentUser!.id,
        rating: currentIndex,
        createdAt: date,
        comment: data.comment,
      }

      const flowerReview = {
        ...comment,
        flowerID: flowerItem!.id,
        name: data.name,
      }

      const userReview = {
        ...comment,
        flowerItem: flowerItem!,
      }

      dispatch(addReview(flowerReview))
      dispatch(addCurrentUserReview(userReview))
      dispatch(setReviewsModal(false))
    } catch (error) {
      console.log(error)
    }
    reset()
    setCurrentIndex(0)
  })

  return (
    <>
      <div className="mb-5">
        <div className="flex items-center justify-center mb-1">
          <span className="mr-3">Your rating: </span>
          <Rating
            count={5}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            className="w-full bg-white rounded-full p-4 border-none mb-1 focus:outline-gold "
            type="text"
            placeholder="Your name"
            {...register('name', {
              required: 'Name is required!',
            })}
          />
          <ErrorInputMessage message={errors.name?.message} />
        </div>

        <div className="mb-6">
          <textarea
            className="w-full h-48 bg-white rounded-3xl p-4 border-none resize-none focus:outline-gold"
            placeholder="Review text"
            {...register('comment', {
              required: 'Comment is required!',
            })}
          />
          <ErrorInputMessage message={errors.comment?.message} />
        </div>

        <DarktBtn
          text="Send"
          width="w-full py-4 disabled:opacity-75 disabled:bg-dark"
          type="submit"
          disabled={!currentIndex}
        />
      </form>
    </>
  )
}

export default ReviewsModalForm
