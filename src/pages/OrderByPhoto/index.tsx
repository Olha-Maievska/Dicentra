import PageWrapper from '@/common/components/PageWrapper'
import OrderByPhotoContent from './components/OrderByPhotoContent'
import OrderByPhotoForm from './components/OrderByPhotoForm'
import { useState } from 'react'
import GoldBtn from '@/common/UI/Buttons/GoldBtn'

const navData = [
  { nav: ' Order a bouquet from a photo', link: '', isActive: true },
]

const OrderByPhoto = () => {
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <PageWrapper title="Order a bouquet from a photo" navArr={navData}>
      <div className="relative flex items-center justify-center">
        {statusMessage ? (
          <div className="w-[500px] py-20">
            <p className="text-3xl text-center mb-20">{statusMessage}</p>
            <GoldBtn
              styles="w-56 py-4 block mx-auto"
              text="Add a photo again"
              handleClick={() => setStatusMessage('')}
            />
          </div>
        ) : (
          <div className="flex items-center p-4">
            <OrderByPhotoForm setStatusMessage={setStatusMessage} />
            <OrderByPhotoContent />
          </div>
        )}
        <img
          className="absolute -right-10 -bottom-10"
          src="images/fones/tulips.png"
          alt="tulips"
        />
        <img
          className="absolute -left-10 -bottom-10"
          src="images/fones/leaves.png"
          alt="leaves"
        />
      </div>
    </PageWrapper>
  )
}

export default OrderByPhoto
