import { FC } from 'react'
import { INotesData } from '@/common/dto/getOrderDto'

interface OrderNotesItemProps {
  item: INotesData
  width: number
  activeIndex: number
  index: number
  handleClick: (i: number, item: INotesData) => void
}

const OrderNotesItem: FC<OrderNotesItemProps> = ({
  item,
  handleClick,
  width,
  activeIndex,
  index,
}) => {
  return (
    <div
      key={item.id}
      style={{
        width: `${width}px`,
        paddingRight: '10px',
        cursor: 'pointer',
      }}
    >
      <div
        className="w-full h-[189px] mb-2 relative"
        onClick={() => handleClick(index, item)}
      >
        {activeIndex === index && (
          <div className="bg-dark w-full h-[189px] absolute top-0 left-0 opacity-50 flex justify-center items-center">
            <img src="/images/icons/check.svg" alt="check" />
          </div>
        )}

        <img
          className="w-full object-cover"
          src={`/images/order/${item.imgPath}`}
          alt="Notes"
        />
      </div>

      <div className="text-center leading-5 h-10">{item.name}</div>
      <div className="text-center text-xl font-medium">{item.price} $</div>
    </div>
  )
}

export default OrderNotesItem
