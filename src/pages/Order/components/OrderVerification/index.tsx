import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { resetCart } from '@/features/cart/cartSlice'
import { setPaymentModal, setSuccessModal } from '@/features/modal/modalSlice'
import {
  setOrderNumber,
  setPayment,
  setPaymentStatus,
} from '@/features/order/orderSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { paymentData } from '@/pages/ShippingAndPayment/data'
import { FC, useState } from 'react'

interface OrderVerificationProps {
  activeStep: number
  steps: number
  handleBack: () => void
}

const OrderVerification: FC<OrderVerificationProps> = ({
  activeStep,
  steps,
  handleBack,
}) => {
  const { data, delivery, noteMessage } = useAppSelector((state) => state.order)
  const [paymentRadio, setPaymentRadio] = useState('cash')
  const dispatch = useAppDispatch()
  const [numberOfOrder] = useState(Date.now())

  const handleClickFinish = () => {
    dispatch(setPayment(paymentRadio))
    console.log(paymentRadio)

    if (paymentRadio === 'byCard') {
      dispatch(setPaymentModal(true))
    }

    dispatch(setSuccessModal(true))
    dispatch(setPaymentStatus('cash'))
    dispatch(setOrderNumber(numberOfOrder))
    dispatch(resetCart())
  }

  return (
    <>
      <div className="relative">
        <div className="mb-8">
          <div className="border-b border-gold pb-3">
            <div className="mb-2 flex">
              <div className="w-1/3">Full name</div>
              <p className="w-2/3">{data?.fullName}</p>
            </div>
            <div className="mb-2 flex">
              <div className="w-1/3">Phone number</div>
              <p className="w-2/3">+{data?.phone}</p>
            </div>
            <div className="mb-2 flex">
              <div className="w-1/3">Email</div>
              <p className="w-2/3">{data?.email || '-'}</p>
            </div>
          </div>
          <div className="flex border-b border-gold py-3">
            <div className="w-1/3">Delivery</div>
            <p className="w-2/3">
              {delivery?.method === 'inStore'
                ? `in store, ${delivery?.storeIn}, ${delivery?.date}, ${delivery?.hours}`
                : `by courier, ${delivery?.city}, ${delivery?.street} street, ${delivery?.number}, ${delivery?.recipient}`}
            </p>
          </div>
          <div className="flex border-b border-gold py-3">
            <div className="w-1/3">A note</div>
            <p className="w-2/3">{noteMessage}</p>
          </div>
        </div>
        <h4 className="text-xl font-medium mb-4">Payment method</h4>
        <div>
          <div className="mb-2">
            <input
              type="radio"
              id="cash"
              name="cash"
              value="cash"
              onChange={(e) => setPaymentRadio(e.target.value)}
              checked={paymentRadio === 'cash'}
            />
            <label htmlFor="cash" className="cursor-pointer ml-2">
              Cash
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="byCard"
              name="byCard"
              value="byCard"
              onChange={(e) => setPaymentRadio(e.target.value)}
              checked={paymentRadio === 'byCard'}
            />

            <label htmlFor="byCard" className="cursor-pointer ml-2">
              By card
            </label>
          </div>
          <div className="flex justify-between items-center w-[400px]">
            {paymentData.imgPathItems.map((img) => (
              <img
                className="w-32 h-8 object-contain first:h-4 odd:w-14 last:h-4 last:w-16"
                src={`/images/shipping/${img}`}
                alt="payment"
                key={img}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 flex justify-between right-12 left-12">
        <DarktBtn
          width="w-40 disabled:opacity-50 disabled:bg-dark"
          disabled={activeStep === 0}
          handleClick={handleBack}
          text="Back"
          type="button"
        />
        <DarktBtn
          width="w-40 disabled:opacity-50 disabled:bg-dark"
          type="button"
          text={activeStep === steps ? 'Finish' : 'Next'}
          handleClick={handleClickFinish}
        />
      </div>
    </>
  )
}

export default OrderVerification
