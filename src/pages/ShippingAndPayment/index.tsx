import PageWrapper from '@/common/components/PageWrapper'
import { deliveryAdress, paymentData, phonesData, shippingData } from './data'

const navData = [{ nav: 'Shipping and payment', link: '', isActive: true }]

const ShippingAndPayment = () => {
  return (
    <PageWrapper title="Shipping and payment" navArr={navData}>
      <>
        <img
          className="w-full h-[300px] object-cover mb-10 bg-gray-200"
          src={`/images/shipping/${shippingData.mainImgPath}`}
          alt={shippingData.title}
        />
        <div className="w-8/12 mx-auto text-md">
          <p className="text-xl mb-8">{shippingData.describing}</p>

          <h5 className="text-2xl font-medium mb-4">{shippingData.title}</h5>

          <p>{shippingData.textBegin}</p>

          <ul className="mb-6 list-disc pl-5">
            {shippingData.textItems.map((item) => (
              <li className="mt-4" key={item}>
                {item}
              </li>
            ))}
          </ul>

          <span className="bg-rose py-2 px-3">{shippingData.textAlarm}</span>

          <p className="mt-5">{shippingData.textFinish}</p>

          <div className="font-medium text-xl mt-5">{phonesData.kyivstar}</div>
          <div className="font-medium text-xl mt-5">{phonesData.life}</div>

          <p className="mt-5">{deliveryAdress.paragraphFirst}</p>

          <p className="mt-6">{deliveryAdress.paragraphSecond}</p>

          <h5 className="text-2xl font-medium my-6">{paymentData.title}</h5>

          <p>{paymentData.textBegin}</p>

          <ul className="mb-6 list-disc pl-5">
            {paymentData.textItems.map((item) => (
              <li key={item} className="mt-4">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex bg-white py-4 px-6 items-center justify-around rounded-3xl">
            {paymentData.imgPathItems.map((img) => (
              <img key={img} src={`/images/shipping/${img}`} alt={img} />
            ))}
          </div>
        </div>
      </>
    </PageWrapper>
  )
}

export default ShippingAndPayment
