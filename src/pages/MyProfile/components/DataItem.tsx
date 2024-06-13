import { FC } from 'react'

interface DataItemProps {
  prop: string
  value: string | undefined
}

const DataItem: FC<DataItemProps> = ({ prop, value }) => {
  return (
    <div className="mb-4 py-3 font-light">
      {prop}: <span className="text-xl ml-4 font-normal">{value}</span>
    </div>
  )
}

export default DataItem
