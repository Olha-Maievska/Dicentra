import { useEffect, useState } from 'react'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CircularProgress } from '@mui/material'
import { useAppDispatch } from '@/hooks/hooks'
import { setContactsForm } from '@/features/forms/formsSlice'
import Input from '@/common/UI/Inputs/Input'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'

const detailsShema = z.object({
  fullName: z.string().min(2).max(50),
  phone: z.string().min(12),
  comment: z.string(),
  email: z.string(),
})

type DetailsShemValues = z.infer<typeof detailsShema>

const ContactsForm = () => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<DetailsShemValues>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      comment: '',
    },
    resolver: zodResolver(detailsShema),
  })

  const onSubmit = handleSubmit((data) => {
    setSuccessMessage('')

    const newData = {
      id: crypto.randomUUID(),
      ...data,
    }

    dispatch(setContactsForm(newData))
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      reset()
      setSuccessMessage('Thank you! Expect a call within an hour!')
    }, 400)
  })

  useEffect(() => {
    setSuccessMessage('')
  }, [])

  return (
    <div className="w-8/12 mx-auto">
      <h5 className="text-2xl font-medium mb-3">Do you have any questions?</h5>
      <p>Fill out the client form below - and we will be happy to answer you</p>

      <form className="mt-8" onSubmit={onSubmit}>
        <div className="flex mb-4">
          <div className="w-6/12 mr-4">
            <Input
              styles={
                errors.fullName?.message
                  ? 'border-red-600 focus:outline-red-600'
                  : 'focus:outline-gold border-transparent'
              }
              placeholder="First and last name"
              {...register('fullName', {
                onChange: (e) =>
                  (e.target.value = e.target.value.replace(/[^a-zA-Z]+/g, '')),
              })}
              onBlur={() => clearErrors('fullName')}
            />
            <ErrorInputMessage message={errors.fullName?.message} />

            <Input
              styles={
                errors.phone?.message
                  ? 'focus:outline-red-600'
                  : 'focus:outline-gold'
              }
              placeholder="Phone number"
              {...register('phone', {
                onChange: (e) =>
                  (e.target.value = e.target.value.replace(/[^+\d]/g, '')),
              })}
              onBlur={() => clearErrors('phone')}
            />
            <ErrorInputMessage message={errors.phone?.message} />

            <Input
              styles={'focus:outline-gold'}
              type="email"
              placeholder="Email (optional)"
              {...register('email')}
            />
          </div>
          <div className="w-6/12">
            <textarea
              className="w-full h-52 py-4 px-5 border-none rounded-3xl font-roboto focus:outline-gold resize-none"
              placeholder="Comment (optional)"
              {...register('comment')}
            />
          </div>
        </div>
        <DarktBtn
          width="w-40 h-12"
          type="submit"
          text={
            loading ? <CircularProgress color="primary" size={16} /> : 'Send'
          }
        />

        {successMessage && <span className="ml-32">{successMessage}</span>}
      </form>
    </div>
  )
}

export default ContactsForm
