import { FC } from 'react'

interface GoldBtnProps {
  styles: string
  text: string
  type?: 'submit' | 'button'
  handleClick?: () => void
}

const GoldBtn: FC<GoldBtnProps> = ({ handleClick, text, styles, type }) => {
  return (
    <button
      className={`${styles} text-center bg-gold text-white font-medium rounded-full hover:bg-btnPressedGold transition-all focus:outline-transparent`}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default GoldBtn
