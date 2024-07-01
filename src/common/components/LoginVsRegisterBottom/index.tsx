import { FC } from 'react'

interface LoginVsRegisterBottomProps {
  text: string
  btnText: string
  openModal: () => void
}

const LoginVsRegisterBottom: FC<LoginVsRegisterBottomProps> = ({
  text,
  openModal,
  btnText,
}) => {
  return (
    <div className="w-[200px] absolute left-1/2 -translate-x-1/2 bottom-8 pt-4 border-t border-gold text-center">
      <p className="font-medium mb-1">{text}</p>
      <button
        className="uppercase text-gold text-xl font-ubuntu hover:text-btnPressedGold transition-all"
        onClick={openModal}
      >
        {btnText}
      </button>
    </div>
  )
}

export default LoginVsRegisterBottom
