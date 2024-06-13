import { FC } from 'react'
import { Link } from 'react-router-dom'

export interface ILogoContentProps {
  title: string
  text: string
}

const LogoContent: FC<ILogoContentProps> = ({ title, text }) => {
  return (
    <div className="w-60">
      <Link className="font-bold text-md" to="/">
        {title}
      </Link>
      <p className="text-sm font-light mt-4">{text}</p>
    </div>
  )
}

export default LogoContent
