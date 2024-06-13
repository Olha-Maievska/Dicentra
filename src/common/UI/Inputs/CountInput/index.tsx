import { FC } from 'react'

interface CountInputProps {
  count: number
  countToDown: () => void
  countToUp: () => void
}

const CountInput: FC<CountInputProps> = ({ count, countToDown, countToUp }) => {
  return (
    <div className="w-full border border-gold border-solid rounded-full py-3 px-5 flex justify-between text-2xl">
      <button className="text-gold font-semibold" onClick={countToDown}>
        &minus;
      </button>
      <span>{count}</span>
      <button className="text-gold font-semibold" onClick={countToUp}>
        +
      </button>
    </div>
  )
}

export default CountInput
