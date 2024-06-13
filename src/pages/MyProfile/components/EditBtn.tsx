import { FC } from 'react'

interface EditBtnProps {
  text: string
  imgPath: string
  onClick: () => void
}

const EditBtn: FC<EditBtnProps> = ({ onClick, text, imgPath }) => {
  return (
    <button
      className="flex items-center text-gold hover:text-btnPressedGold transition-all"
      onClick={onClick}
    >
      <img className="mr-2" src={`/images/icons/${imgPath}`} alt="Edit data" />
      {text}
    </button>
  )
}

export default EditBtn
