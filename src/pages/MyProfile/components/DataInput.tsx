import { ChangeEvent, FC } from 'react'

interface DataInputProps {
  value: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const DataInput: FC<DataInputProps> = ({ value, name, onChange }) => {
  const label = name[0].toUpperCase() + name.slice(1)
  return (
    <div className="mb-4 py-3 font-light flex items-center">
      {label}:
      <input
        className="w-full text-xl font-normal border-b border-light px-5 ml-3 focus:outline-transparent focus:border-gold"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default DataInput
