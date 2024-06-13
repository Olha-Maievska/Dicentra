import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import CartTable from './components/CartTable'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { setTotalPrice } from '@/features/cart/cartSlice'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import QuickOrderPhone from '@/common/components/QuickOrderPhone'
import Chocolates from '@/common/components/Chocolates'
import ActionCarousel from '../Home/components/ActionCarousel'

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const title = !cart.length
    ? 'You have not order yet! Please, go to shop and choose products'
    : 'You have added to cart'

  const total = cart.reduce((prev, el) => prev + el.priceWithCount, 0)

  const handleOpenOrderPage = () => {
    navigate('/order')
  }

  useEffect(() => {
    dispatch(setTotalPrice(total))
  }, [dispatch, total])

  return (
    <div className="pt-48 pb-28 bg-light relative font-roboto min-h-screen">
      <h2 className="text-center text-3xl font-medium mb-10">{title}</h2>

      {!cart.length ? (
        <>
          <ActionCarousel />
          <div className="container">
            <Chocolates />
          </div>
        </>
      ) : (
        <div className="container">
          <CartTable />
          <div className="w-[400px] mt-6 mx-auto">
            <div className="flex justify-between items-center mb-6">
              <Link
                to="/bouquets"
                className="text-gold text-md hover:text-btnPressedGold transition-all"
              >
                Continue shopping
              </Link>
              <div className="text-2xl font-bold">Total: {total} $</div>
            </div>
            <DarktBtn
              text="Checkout"
              width="w-full py-4 uppercase"
              handleClick={handleOpenOrderPage}
            />
            <div>
              <QuickOrderPhone />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
