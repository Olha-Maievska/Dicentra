import { ChangeEvent, FC, useState } from 'react'

interface InStoreProps {
  data: {
    storeIn: string
    date: string
    hours: string
  }
  handleChangeData: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

const InStore: FC<InStoreProps> = ({ data, handleChangeData }) => {
  const [storesArray] = useState(['Kyiv', 'Lviv', 'Kharkiv'])

  const [hoursArray] = useState([
    '08:00 - 11:00',
    '11:00 - 14:00',
    '14:00 - 17:00',
    '17:00 - 20:00',
    '20:00 - 22:00',
  ])

  return (
    <div className="mr-10 w-[306px]">
      <div className="flex mb-4 justify-between">
        <label htmlFor="storeIn" className="mr-4 py-3">
          Store in
        </label>
        <select
          id="storeIn"
          name="storeIn"
          value={data.storeIn}
          className="w-56 focus:outline-gold bg-white px-5 py-3 rounded-3xl"
          onChange={handleChangeData}
        >
          <option className="text-gray-400" aria-label="None" value={''}>
            Select a store
          </option>
          {storesArray.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex mb-4 justify-between">
        <label htmlFor="date" className="mr-4 py-2">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={data.date}
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={handleChangeData}
          className="w-56 py-3 focus:outline-gold pl-6 pr-2 rounded-3xl"
          style={{ outlineWidth: '1px' }}
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="hours" className="mr-4 py-3">
          Hours
        </label>
        <select
          id="hours"
          name="hours"
          value={data.hours}
          className="w-56 focus:outline-gold bg-white px-5 py-3 rounded-3xl"
          onChange={handleChangeData}
        >
          <option className="text-gray-400" aria-label="None" value={''}>
            Select hours
          </option>
          {hoursArray.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InStore
