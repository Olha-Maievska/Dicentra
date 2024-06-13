import { useAppSelector } from '@/hooks/hooks'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cart } = useAppSelector((state) => state.cart)

  return (
    <Link className="ml-3 flex items-center" to="cart">
      <div className="relative">
        <img
          className="w-6 h-6 object-cover"
          src="/images/icons/icon_cart.svg"
        />
        {!cart.length ? (
          ''
        ) : (
          <div className="w-6 h-6 bg-dark rounded-full flex items-center justify-center absolute -top-3 -right-3">
            <span className="text-white text-sm font-semibold">
              {cart.length}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default CartIcon
