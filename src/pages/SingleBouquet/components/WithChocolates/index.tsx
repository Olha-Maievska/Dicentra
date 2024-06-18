import { FC, useEffect, useState } from 'react'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { addItemToCart } from '@/features/cart/cartSlice'
import { IFlowerItem } from '@/common/dto/getFlowersDto'

interface ITogetherWithItem {
  item: IFlowerItem
}

const WithChocolates: FC<ITogetherWithItem> = ({ item }) => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)

  const [isAdded, setIsAdded] = useState(false)
  const newID = `${item.id}${item.togetherWith?.id}`

  const priceWithout = item.price! + item?.togetherWith!.price
  const priceWith = item!.price! + item!.togetherWith!.actionPrice!
  const saving = priceWithout - priceWith

  const addProductToCart = () => {
    setIsAdded(true)
    dispatch(
      addItemToCart({
        id: newID,
        product: item,
        withTogether: true,
        count: 1,
        price: priceWith,
        priceWithCount: priceWith,
      })
    )
  }

  useEffect(() => {
    cart.map((el) => {
      if (el.id === newID) {
        setIsAdded(true)
      } else {
        setIsAdded(false)
      }
    })
  }, [cart, newID])

  return (
    <div className="my-24 bg-white text-dark p-10" key={item.id}>
      <div className="flex justify-between items-center border border-solid border-light p-10">
        <h2 className="w-1/12 font-medium text-xl mr-10">Cheaper together</h2>

        <div className="flex items-center">
          <div className="flex items-center justify-center mr-4">
            <img
              className="w-[133px] h-[148px] object-contain"
              src={`/images/products/${item.img}`}
              alt={item.name}
            />
          </div>
          <div>
            <h3 className="font-normal text-center w-36">{item.name}</h3>
            <div className="text-center mt-4">
              <span className="font-semibold text-xl">{item.price}</span> $
            </div>
          </div>
        </div>

        <span className="text-3xl text-grey font-light flex items-center  mx-10">
          +
        </span>

        <div className="flex items-center">
          <div className="flex items-center justify-center mr-4">
            <img
              className="w-[120px] h-[116px] object-contain"
              src={`/images/products/${item?.togetherWith?.img}`}
              alt={item.name}
            />
          </div>
          <div>
            <h3 className="font-normal text-center w-36">
              Chocolates {item?.togetherWith?.name}
            </h3>
            <div className="text-center mt-4">
              <span
                className={`${
                  !item?.togetherWith?.actionPrice
                    ? 'text-dark'
                    : 'mr-2 text-gold line-through'
                } font-semibold text-xl `}
              >
                {item?.togetherWith?.price}
              </span>
              <span className="font-semibold text-xl ">
                {!item?.togetherWith?.actionPrice
                  ? null
                  : item?.togetherWith.actionPrice}
              </span>{' '}
              $
            </div>
          </div>
        </div>

        <span className="text-3xl text-grey font-light flex items-center mx-10">
          =
        </span>

        <div className="text-center">
          <div className="font-semibold text-xl mb-4">
            <div className="text-sale text-sm mb-1">Saving {saving} $</div>
            <span className="mr-3 text-gold line-through">{priceWithout}</span>
            <span className="text-dark ">{priceWith}</span> $
          </div>

          {isAdded ? (
            <div className="h-12 w-32 flex items-center justify-center">
              Added to cart
            </div>
          ) : (
            <DarktBtn
              text="Add to cart"
              width="w-32"
              handleClick={addProductToCart}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default WithChocolates
