import { useState } from 'react'
import {
  addPriceWithCount,
  minusPriceWithCount,
} from '@/features/flowers/flowersSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { addItemToCart } from '@/features/cart/cartSlice'
import CountInput from '@/common/UI/Inputs/CountInput'
import { isAddedToCart } from '@/utils/helpers'

const Count = () => {
  const dispatch = useAppDispatch()
  const { flowerItem } = useAppSelector((state) => state.flowers)
  const { cart } = useAppSelector((state) => state.cart)

  const [count, setCount] = useState(1)

  const isAdded = isAddedToCart(flowerItem!.id, cart)
  const price = flowerItem?.actionPrice
    ? flowerItem.actionPrice
    : flowerItem?.price

  const handleCountToDown = () => {
    if (count === 1) return
    setCount((prev) => prev - 1)
    dispatch(minusPriceWithCount())
  }

  const handleCountToUp = () => {
    setCount((prev) => prev + 1)
    dispatch(addPriceWithCount())
  }

  const addProcuctToCart = () => {
    dispatch(
      addItemToCart({
        product: flowerItem!,
        withTogether: false,
        count,
        price: price!,
        priceWithCount: price! * count,
      })
    )
  }

  return (
    <div className="flex mt-5">
      {flowerItem?.inStock ? (
        isAdded ? (
          <div className="w-full text-center bg-light py-4 rounded-xl">
            Product added to cart
          </div>
        ) : (
          <>
            <div className="w-1/3 mr-3">
              <CountInput
                count={count}
                countToDown={handleCountToDown}
                countToUp={handleCountToUp}
              />
            </div>
            <DarktBtn
              text="Add to cart"
              width="w-2/3"
              handleClick={addProcuctToCart}
            />
          </>
        )
      ) : (
        <div className="w-full text-center bg-light py-4 rounded-xl">
          Product temporarily absent
        </div>
      )}
    </div>
  )
}

export default Count
