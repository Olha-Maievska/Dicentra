import { FC } from 'react'

interface ModalCallBackTextProps {
  text: string
}

const ModalCallBackText: FC<ModalCallBackTextProps> = ({ text }) => {
  return <p className="mb-10 text-center font-ubuntu">{text}</p>
}

export default ModalCallBackText
