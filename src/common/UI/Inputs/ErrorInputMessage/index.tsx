import { FC } from 'react'

interface ErrorInputMessageProps {
  message: string | undefined
}

const ErrorInputMessage: FC<ErrorInputMessageProps> = ({ message }) => {
  return (
    <div className="text-red-600 text-sm leading-[14px] h-6 ml-4 mt-1">
      {message}
    </div>
  )
}

export default ErrorInputMessage
