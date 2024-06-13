import { paymentData } from '@/pages/ShippingAndPayment/data'
import { deliveryData } from '../../../data'

const Delivery = () => {
  return (
    <>
      <ul className="pb-2 border-b border-light">
        {deliveryData.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.how}</span>
            <span
              className={`${
                item.price.toLowerCase() === 'for free'
                  ? 'text-sale'
                  : 'text-dark'
              } font-semibold`}
            >
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-between mt-4">
        {paymentData.imgPathItems.map((item) => (
          <li key={item} className="h-[27px] last:h-[18px] first:h-[18px]">
            <img
              className="h-full"
              src={`/images/shipping/${item}`}
              alt={item}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Delivery
