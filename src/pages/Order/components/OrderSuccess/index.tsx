import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { setSuccessModal } from '@/features/modal/modalSlice'
import { resetOrder } from '@/features/order/orderSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface OrderSuccessProps {
  resetSteps: () => void
}

const OrderSuccess: FC<OrderSuccessProps> = ({ resetSteps }) => {
  const { data, delivery, orderNumber, paymentStatus } = useAppSelector(
    (state) => state.order
  )
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const createdAt = new Date().toLocaleString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const handleBack = () => {
    navigate('/')
    dispatch(resetOrder())
    dispatch(setSuccessModal(false))
    resetSteps()
  }

  return (
    <div className="font-roboto p-10">
      <h2 className="text-3xl text-center font-medium mb-4">
        Thank you! Your order has been processed successfully!
      </h2>
      <div className="text-xl text-center font-medium mb-8">
        We will contact you shortly.
      </div>
      <div className="border border-gold p-10 w-[600px] mx-auto mb-6">
        <div className="mb-2">
          Order number: <span className="font-medium">{orderNumber}</span>
        </div>
        <div className="mb-2">
          Customer: <span className="font-medium">{data?.fullName}</span>
        </div>
        <div className="mb-2">
          Phone number: <span className="font-medium">+{data?.phone}</span>
        </div>
        <div className="mb-2">
          Delivery:{' '}
          <span className="font-medium">
            {delivery?.method === 'byCourier'
              ? `by courier, ${delivery?.city}, ${delivery?.street} street, ${delivery?.number}`
              : `in store, ${delivery?.storeIn}, ${delivery?.date}, ${delivery?.hours}`}
            ,{' '}
          </span>
        </div>
        <div className="mb-2">
          Payment details: <span className="font-medium">{paymentStatus}</span>
        </div>
        <div className="mb-2">
          Created at: <span className="font-medium">{createdAt}</span>
        </div>
      </div>
      <GoldBtn
        text={'Back to store'}
        styles="w-40 mx-auto block py-3"
        handleClick={handleBack}
      />
    </div>
  )
}

export default OrderSuccess
