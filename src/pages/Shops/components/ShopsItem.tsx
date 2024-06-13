import { FC } from 'react'

interface ShopsItemProps {
  item: {
    id: string
    address: string
    kyivstarPhone: string
    lifePhone: string
    email: string
    imgPath: string
  }
}

const ShopsItem: FC<ShopsItemProps> = ({ item }) => {
  return (
    <div className="mb-12">
      <img
        className="h-[300px] object-cover mb-8 bg-gray-200"
        src={`/images/shops/${item.imgPath}`}
        alt=""
      />
      <div className="w-8/12 mx-auto text-xl">
        <div className="flex items-center mb-10">
          <img
            className="mr-7"
            src="/images/icons/location.svg"
            alt="location"
          />
          <div>{item.address}</div>
        </div>
        <div className="flex items-center mb-10">
          <img className="mr-7" src="/images/icons/phone.svg" alt="phone" />
          <div>
            <div className="mb-2">{item.kyivstarPhone}</div>
            <div>{item.lifePhone}</div>
          </div>
        </div>
        <div className="flex items-center mb-10">
          <img className="mr-7" src="/images/icons/mail.svg" alt="mail" />
          <div>{item.email}</div>
        </div>
      </div>
    </div>
  )
}

export default ShopsItem
