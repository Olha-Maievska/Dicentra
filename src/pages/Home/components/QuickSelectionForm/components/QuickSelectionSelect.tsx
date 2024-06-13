import { ChangeEventHandler, FC } from 'react'

interface QuickSelectionSelectProps {
  selectData: {
    title: string
    data: string[]
  }
  onChange: ChangeEventHandler<HTMLSelectElement>
  name: string
}

const QuickSelectionSelect: FC<QuickSelectionSelectProps> = ({
  selectData,
  onChange,
  name,
}) => {
  return (
    <select
      className="focus:ring-transparent focus:outline-none text-textGrey font-light p-5 w-[270px] border-none text-base font-ubuntu rounded-xl"
      name={name}
      onChange={onChange}
    >
      <option className="font-light text-gray-400" value={''} aria-label="None">
        {selectData.title}
      </option>
      {selectData.data.map((option, i) => (
        <option key={option + i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default QuickSelectionSelect
