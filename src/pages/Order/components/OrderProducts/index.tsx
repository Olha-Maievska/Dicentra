import { useAppSelector } from '@/hooks/hooks'
import { Link } from 'react-router-dom'

const OrderProducts = () => {
  const { cart, totalPrice } = useAppSelector((state) => state.cart)
  const { delivery, card } = useAppSelector((state) => state.order)

  const deliveryPrice =
    delivery?.method === 'inStore' ? 0 : totalPrice > 25 ? 0 : 12

  return (
    <div className="bg-white w-[360px] p-8 text-dark">
      <div className="flex justify-between border-b pb-4 border-light font-medium text-xl">
        <h4>Your order</h4>
        <Link className="text-gold" to={'/cart'}>
          Edit
        </Link>
      </div>
      <div
        className="my-8 border-b pb-4 border-light"
        style={{
          maxHeight: 400,
          overflowY: cart.length > 3 ? 'scroll' : 'unset',
        }}
      >
        {cart.map(({ product, priceWithCount, count, withTogether }, i) => (
          <div
            key={`${product.id}${i}`}
            className="mb-5 flex items-center w-full"
          >
            <div className="w-1/3 h-28 flex justify-center items-center mr-3">
              <img
                className="w-full h-full object-contain"
                src={`/images/products/${product.img}`}
                alt={product.name}
              />
            </div>
            <div className="font-light w-2/3">
              <h4>{product.name}</h4>
              <span className="text-sm">Vendor code: {product.article}</span>
              {withTogether && <div className="text-sm">With chocolates </div>}
              <div className="flex mt-2">
                <span>q-ty: {count}</span>
                <div className="ml-5">
                  Price: <span className="font-medium">{priceWithCount} $</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between">
          <div>Order price:</div>
          <div className="font-medium">{totalPrice} $</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery:</div>
          <div className="font-medium">
            {deliveryPrice ? `${deliveryPrice} $` : 'For free'}
          </div>
        </div>
        {card && (
          <div className="flex justify-between">
            <div>A note:</div>
            <div className="font-medium">{card?.price} $</div>
          </div>
        )}
        <div className="flex justify-between mt-6 border-t pt-5 border-light text-xl">
          <div>Total:</div>
          <div className="font-medium">
            {totalPrice + deliveryPrice + (card?.price ? card.price : 0)} $
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderProducts
