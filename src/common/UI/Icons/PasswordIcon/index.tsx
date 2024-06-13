import { FC } from 'react'

interface PasswordIconProps {
  imgPath: string
  setType: () => void
}

const PasswordIcon: FC<PasswordIconProps> = ({ imgPath, setType }) => {
  return (
    <img
      className="absolute right-4 top-4 w-5 h-4 cursor-pointer opacity-75"
      src={`/images/icons/${imgPath}`}
      alt="password"
      onClick={setType}
    />
  )
}

export default PasswordIcon
