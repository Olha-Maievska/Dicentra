import { PropsWithRef, forwardRef } from 'react'

interface InputProps extends PropsWithRef<JSX.IntrinsicElements['input']> {
  styles?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ styles, ...other }, ref) => {
    return (
      <input
        className={`w-full font-roboto text-md bg-white py-3 px-5 border-none rounded-full ${styles}`}
        ref={ref}
        {...other}
        autoComplete="off"
      />
    )
  }
)

export default Input
