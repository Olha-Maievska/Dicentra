import { FC } from 'react'
import OrderData from '../OrderData'
import OrderDeivery from '../OrderDelivery'
import OrderNotes from '../OrderNotes'
import OrderVerification from '../OrderVerification'

interface OrderContentProps {
  content: string
  activeStep: number
  steps: number
  handleBack: () => void
  handleNext: () => void
}

const OrderContent: FC<OrderContentProps> = ({
  content,
  activeStep,
  steps,
  handleBack,
  handleNext,
}) => {
  return (
    <div className="mt-10">
      {content === 'data' && (
        <OrderData
          activeStep={activeStep}
          steps={steps}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {content === 'delivery' && (
        <OrderDeivery
          activeStep={activeStep}
          steps={steps}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {content === 'note' && (
        <OrderNotes
          activeStep={activeStep}
          steps={steps}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {content === 'verification' && (
        <OrderVerification
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
        />
      )}
    </div>
  )
}

export default OrderContent
