import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { ITogetherWith } from '@/common/dto/getFlowersDto'
import { addChocolateToCart } from '@/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { isAddedToCart } from '@/utils/helpers'
import { chocolatesData } from './data'

const Chocolates = () => {
  const { cart } = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()

  const addChocoToCart = (data: ITogetherWith) => {
    dispatch(addChocolateToCart(data))
  }

  return (
    <div className="text-dark my-20">
      <h4 className="flex items-center justify-center text-xl font-medium uppercase">
        <img className="mr-4" src="/images/icons/gift.svg" alt="gift" />

        <span className="relative mt-3 after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:-bottom-3 after:bg-gold">
          Buy together
        </span>
      </h4>
      <div className="flex justify-between mt-8">
        {chocolatesData?.map((item) => {
          const isAdded = isAddedToCart(item.id, cart)
          return (
            <div key={item.id} className="w-[244px] text-center">
              <div className="w-full h-[344px] bg-white flex justify-center items-center mb-3">
                <img
                  className="w-[190px] h-[190px] object-contain "
                  src={`/images/products/${item.img}`}
                  alt={item.name}
                />
              </div>
              <div className="mb-3">{item.name}</div>
              <div className="font-medium text-xl mb-3">{item.price} $</div>

              {isAdded ? (
                <div className="h-12 pt-4">Product added to cart</div>
              ) : (
                <DarktBtn
                  text="Add to cart"
                  width="w-32"
                  handleClick={() => addChocoToCart(item)}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Chocolates
