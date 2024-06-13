import { FC } from 'react'

interface DarkBtnProps {
  text: string | JSX.Element
  width: string
  type?: 'submit' | 'button'
  handleClick?: () => void
  disabled?: boolean
}

const DarktBtn: FC<DarkBtnProps> = ({
  text,
  width,
  type,
  handleClick,
  disabled,
}) => {
  return (
    <button
      className={`${width} bg-dark hover:bg-btnPressedDark transition-all py-3 text-white rounded-full font-roboto`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default DarktBtn
