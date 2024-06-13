import { setPaymentModal, setSuccessModal } from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { Modal } from '@mui/material'
import { FC } from 'react'
import OrderPayment from '../OrderPayment'
import OrderSuccess from '../OrderSuccess'
import { resetOrder } from '@/features/order/orderSlice'

interface OrderPaymentProps {
  resetSteps: () => void
}

const OrderModal: FC<OrderPaymentProps> = ({ resetSteps }) => {
  const { paymentModal, successModal } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const handleCloseModal = () => {
    if (paymentModal) {
      dispatch(setPaymentModal(false))
    } else {
      dispatch(setSuccessModal(false))
      dispatch(resetOrder())
      resetSteps()
    }
  }
  return (
    <Modal open={paymentModal || successModal} onClose={handleCloseModal}>
      <div className="top-1/2 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-light rounded-3xl">
        {paymentModal ? (
          <OrderPayment />
        ) : (
          <OrderSuccess resetSteps={resetSteps} />
        )}
      </div>
    </Modal>
  )
}

export default OrderModal
