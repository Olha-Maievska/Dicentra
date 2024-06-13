import { FC, useState } from 'react'
import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { z } from 'zod'
import PasswordInput from '@/common/UI/Inputs/PasswordInput'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  changeUserPassword,
  resetPasswordMessage,
} from '@/features/users/usersSlice'

const detailsShema = z
  .object({
    password: z.string(),
    newPassword: z
      .string()
      .min(4, 'The password must be at least 4 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
        'The password must have 1 uppercase and 1 lowercase letters, 1 number and 1 special character'
      ),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type DetailsShemValues = z.infer<typeof detailsShema>

interface PasswordFormProps {
  cancelBtn: () => void
}

const PasswordForm: FC<PasswordFormProps> = ({ cancelBtn }) => {
  const [passwordType, setPasswordType] = useState('password')
  const [newPasswordType, setNewPasswordType] = useState('password')
  const [confirmType, setConfirmType] = useState('password')
  const [passwordError, setPasswordError] = useState('')

  const dispatch = useAppDispatch()
  const { passwordMessage, currentUser } = useAppSelector(
    (state) => state.users
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsShemValues>({
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: zodResolver(detailsShema),
  })

  const handleResetPAsswordMessage = () => {
    setTimeout(() => dispatch(resetPasswordMessage()), 3000)
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      const isNotEmpty = Object.values(data).every((val) => val)

      if (!isNotEmpty) return

      const newData = {
        id: currentUser!.id!,
        ...data,
      }

      if (data.password !== currentUser?.password) {
        setPasswordError('Password entered incorrectly')
      } else {
        dispatch(changeUserPassword(newData))
        handleResetPAsswordMessage()
        reset()
      }
    } catch (error) {
      console.log(error)
      reset()
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <PasswordInput
          type={passwordType}
          placeholder="Password"
          setPasswordType={setPasswordType}
          onFocus={() => setPasswordError('')}
          {...register('password')}
        />
        <ErrorInputMessage message={passwordError} />
      </div>
      <div className="mb-3">
        <PasswordInput
          type={newPasswordType}
          placeholder="New password"
          setPasswordType={setNewPasswordType}
          {...register('newPassword')}
        />
        <ErrorInputMessage message={errors.newPassword?.message} />
      </div>

      <div className="mb-1">
        <PasswordInput
          type={confirmType}
          placeholder="Confirm new password"
          setPasswordType={setConfirmType}
          {...register('confirmPassword')}
        />
        <ErrorInputMessage message={errors.confirmPassword?.message} />
      </div>

      <p className="text-center text-sm font-medium h-4">
        {passwordMessage ? passwordMessage : ''}
      </p>

      <div className="pt-1">
        <GoldBtn
          text="Save"
          styles="uppercase leading-none px-7 py-3 mr-4"
          type="submit"
        />

        <button
          className="text-gold hover:text-btnPressedGold transition-all"
          onClick={cancelBtn}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default PasswordForm
