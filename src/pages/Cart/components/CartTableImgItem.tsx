import { FC } from 'react'

interface CartTableImgProps {
  name: string
  article: number | string
  img: string
}

const CartTableImgItem: FC<CartTableImgProps> = ({ name, article, img }) => {
  return (
    <div className="flex items-center w-72">
      <div className="w-20 h-28 bg-white flex justify-center items-center mr-4">
        <img
          className="w-16 h-20 object-contain"
          src={`/images/products/${img}`}
        />
      </div>
      <div>
        <div className="text-xl mb-2">{name}</div>
        <div>Vendor code: {article}</div>
      </div>
    </div>
  )
}

export default CartTableImgItem
