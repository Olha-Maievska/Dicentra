import { FormEvent, useState } from 'react'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setLoginModal } from '@/features/modal/modalSlice'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import { loginUser } from '@/features/users/usersSlice'
import PasswordInput from '@/common/UI/Inputs/PasswordInput'

const LoginForm = () => {
  const { users } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  const [phoneInput, setPhoneInput] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const [loginError, setLoginError] = useState('')

  const isDisabledBtn = !phoneInput && !password

  const resetInputs = () => {
    setPhoneInput('')
    setPassword('')
  }

  const cleanPhoneError = () => {
    setLoginError('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newUser = {
        phone: phoneInput,
        password,
      }

      if (!users.length) {
        setLoginError('The account cannot be found. Please register!')
      }

      users.map((user) => {
        if (
          user.phone === newUser.phone &&
          user.password !== newUser.password
        ) {
          setLoginError('Invalid password. Please try again!')
          return
        } else if (user.phone !== newUser.phone) {
          setLoginError('The account cannot be found. Please register!')
          return
        } else if (
          user.phone === newUser.phone &&
          user.password === newUser.password
        ) {
          dispatch(loginUser(newUser))
          dispatch(setLoginModal(false))
          resetInputs()
          return
        } else return
      })
    } catch (error) {
      console.error(error)
      resetInputs()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4" onFocus={cleanPhoneError}>
        <Phone
          value={phoneInput}
          changeValue={(value) => setPhoneInput(value)}
        />
      </div>
      <div className="relative mb-4">
        <PasswordInput
          type={passwordType}
          placeholder="Password"
          setPasswordType={setPasswordType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setLoginError('')}
        />
      </div>
      <div className="mb-4 text-center h-6 -ml-5">
        <ErrorInputMessage message={loginError} />
      </div>
      <DarktBtn
        text="Sign in"
        width="w-full disabled:opacity-75 disabled:bg-dark"
        type="submit"
        disabled={isDisabledBtn}
      />
    </form>
  )
}

export default LoginForm
