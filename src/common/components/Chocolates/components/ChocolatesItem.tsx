import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { ITogetherWith } from '@/common/dto/getFlowersDto'
import { addChocolateToCart } from '@/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { FC, useEffect, useState } from 'react'

interface ChocolatesItemProps {
  item: ITogetherWith
}

const ChocolatesItem: FC<ChocolatesItemProps> = ({ item }) => {
  const { cart } = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()

  const [isAdded, setIsAdded] = useState(false)

  const addChocoToCart = (data: ITogetherWith) => {
    dispatch(addChocolateToCart(data))
  }

  useEffect(() => {
    const found = cart.find((el) => el.id === item.id)
    if (found) {
      setIsAdded(true)
    } else false
  }, [cart, item.id])

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
}

export default ChocolatesItem
