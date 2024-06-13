import Input from '@/common/UI/Inputs/Input'
import { ChangeEvent, Dispatch, FC } from 'react'

interface ByCourierData {
  data: {
    city: string
    street: string
    number: string
    wishes?: string
    recipient: string
  }
  recipientData: { name: string; phone: string }
  recipientChangeData: Dispatch<
    React.SetStateAction<{
      name: string
      phone: string
    }>
  >
  handleClickData: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const ByCourier: FC<ByCourierData> = ({
  handleClickData,
  data,
  recipientChangeData,
  recipientData,
}) => {
  return (
    <div className="">
      <div className="flex items-start mb-4">
        <div className="mr-10 w-1/2">
          <Input
            value={data.city}
            onChange={handleClickData}
            name="city"
            styles="mb-4 focus:outline-gold"
            placeholder="City"
            required
          />
          <Input
            value={data.street}
            onChange={handleClickData}
            name="street"
            styles="mb-4 focus:outline-gold"
            placeholder="Street"
            required
          />
          <Input
            value={data.number}
            onChange={handleClickData}
            name="number"
            styles="mb-4 focus:outline-gold"
            placeholder="Number of house"
            required
          />
        </div>
        <div className="w-1/2">
          <textarea
            className="w-full h-[175px] rounded-3xl resize-none focus:outline-gold py-3 px-5"
            placeholder="Wishes"
            name="wishes"
            value={data.wishes}
            onChange={handleClickData}
          />
        </div>
      </div>
      <div>
        <div className="mb-1">
          <input
            type="radio"
            id="recipient"
            name="recipient"
            value="I am the recipient"
            onChange={handleClickData}
            checked={data.recipient === 'I am the recipient'}
          />
          <label
            htmlFor="recipient"
            className="cursor-pointer ml-2 font-ubuntu"
          >
            I am the recipient
          </label>
        </div>
        <div className="mb-1">
          <input
            type="radio"
            id="gift"
            name="recipient"
            value="As a gift"
            onChange={handleClickData}
            checked={data.recipient === 'As a gift'}
          />

          <label htmlFor="gift" className="cursor-pointer ml-2 font-ubuntu">
            As a gift
          </label>
        </div>

        {data.recipient === 'As a gift' && (
          <div className="w-[350px] mt-3">
            <div className="flex justify-between mb-3 items-end">
              <label htmlFor="receiverName">Receiver name:</label>

              <input
                className="w-2/3 bg-transparent border-b border-gold focus:outline-none focus:border-btnPressedGold px-1 placeholder:text-gold"
                value={recipientData.name}
                onChange={(e) =>
                  recipientChangeData({
                    ...recipientData,
                    name: e.target.value,
                  })
                }
                id="receiverName"
              />
            </div>
            <div className="flex justify-between items-end">
              <label htmlFor="receiverName">Receiver phone:</label>

              <input
                className="w-2/3 bg-transparent border-b border-gold focus:outline-none focus:border-btnPressedGold px-1 placeholder:text-gold"
                value={recipientData.phone}
                onChange={(e) =>
                  recipientChangeData({
                    ...recipientData,
                    phone: e.target.value,
                  })
                }
                id="receiverPhone"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ByCourier
