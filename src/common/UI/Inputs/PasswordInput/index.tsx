import { PropsWithRef, forwardRef } from 'react'
import PasswordIcon from '../../Icons/PasswordIcon'

interface PasswordInputProps
  extends PropsWithRef<JSX.IntrinsicElements['input']> {
  type: string
  placeholder: string
  styles?: string
  setPasswordType: (type: string) => void
  onFocus?: () => void
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ styles, type, placeholder, onFocus, setPasswordType, ...other }, ref) => {
    const imgPaswordPath = type === 'password' ? 'eye-slash.svg' : 'eye.svg'

    return (
      <div className="relative">
        <input
          className={`w-full font-roboto text-md bg-white py-3 pl-5 pr-10 rounded-full focus:outline-gold ${styles}`}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          ref={ref}
          {...other}
          autoComplete="off"
        />
        <PasswordIcon
          imgPath={imgPaswordPath}
          setType={() =>
            setPasswordType(type === 'password' ? 'text' : 'password')
          }
        />
      </div>
    )
  }
)

export default PasswordInput
