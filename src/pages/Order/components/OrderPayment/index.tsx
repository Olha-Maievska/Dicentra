import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import Input from '@/common/UI/Inputs/Input'
import { resetCart } from '@/features/cart/cartSlice'
import { setPaymentModal, setSuccessModal } from '@/features/modal/modalSlice'
import { setPaymentData, setPaymentStatus } from '@/features/order/orderSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const detailsShema = z.object({
  cardOwner: z.string().min(3, 'Full name must contain at least 3 leters'),
  cardNumber: z.string().min(19, 'Card number must contain 16 numbers').max(19),
  cardExpiration: z
    .string()
    .min(7, 'Card expiration must contain 4 numbers')
    .max(7),
  cardCvv: z.string().min(3, 'Cvv must contain 3 character(s)').max(3),
})

type DetailsShemValues = z.infer<typeof detailsShema>

const OrderPayment = () => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DetailsShemValues>({
    defaultValues: {
      cardCvv: '',
      cardExpiration: '',
      cardOwner: '',
      cardNumber: '',
    },
    resolver: zodResolver(detailsShema),
  })

  const onSubmit = handleSubmit((data) => {
    setLoading(true)
    const isValues = Object.values(data).every((el) => el)

    if (!isValues) return

    dispatch(setPaymentData(data))

    setTimeout(() => {
      setLoading(false)
      reset()
      dispatch(setPaymentModal(false))
      dispatch(setSuccessModal(true))
      dispatch(resetCart())
      dispatch(setPaymentStatus('paid'))
    }, 1000)
  })

  return (
    <form
      className="p-10 w-[500px] focus-visible:outline-none"
      onSubmit={onSubmit}
    >
      <h4 className="text-center font-medium text-xl mb-6">Payment Details</h4>
      <div className="flex mb-2">
        <label htmlFor="cardOwner" className="w-[128px] mt-2">
          Card Owner:{' '}
        </label>
        <div>
          <Input
            styles={`${
              errors.cardOwner?.message
                ? 'border-red-600 focus:outline-red-600'
                : 'focus:outline-gold border-light'
            }`}
            placeholder="John Doe"
            id="cardOwner"
            {...register('cardOwner', {
              onChange(event) {
                event.target.value = event.target.value.replace(
                  /[^a-zA-Z]\s+/g,
                  ''
                )
              },
            })}
            style={{ width: '250px' }}
          />
          <ErrorInputMessage message={errors.cardOwner?.message} />
        </div>
      </div>
      <div className="flex mb-2">
        <label htmlFor="cardNumber" className="w-[128px] mt-2">
          Card Number:{' '}
        </label>
        <div>
          <Input
            styles={`${
              errors.cardNumber?.message
                ? 'border-red-600 focus:outline-red-600'
                : 'focus:outline-gold border-light'
            }`}
            placeholder="XXXX XXXX XXXX XXXX"
            id="cardNumber"
            {...register('cardNumber', {
              onChange(event) {
                event.target.value = event.target.value
                  .replace(/\D/g, '')
                  .replace(
                    /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g,
                    '$1 $2 $3 $4'
                  )
              },
            })}
            maxLength={19}
            style={{ width: '250px' }}
          />
          <ErrorInputMessage message={errors.cardNumber?.message} />
        </div>
      </div>

      <div className="flex w-[400px] mb-2">
        <label htmlFor="cardExpiration" className="w-[128px] mt-2">
          Card Expiration:{' '}
        </label>
        <div>
          <Input
            id="cardExpiration"
            styles={`${
              errors.cardExpiration?.message
                ? 'border-red-600 focus:outline-red-600'
                : 'focus:outline-gold border-light'
            }`}
            placeholder="MM / YY"
            {...register('cardExpiration', {
              onChange(event) {
                event.target.value = event.target.value
                  .replace(/\D/g, '')
                  .replace(/^(\d{0,2})(\d{0,2})$/g, '$1 / $2')
              },
            })}
            style={{ width: '110px' }}
            maxLength={7}
          />
          <ErrorInputMessage message={errors.cardExpiration?.message} />
        </div>
      </div>

      <div className="flex w-[400px] mb-2">
        <label htmlFor="cardCvv" className="w-[128px] mt-2">
          CVV:{' '}
        </label>

        <div>
          <Input
            styles={`${
              errors.cardCvv?.message
                ? 'border-red-600 focus:outline-red-600'
                : 'focus:outline-gold border-light'
            }`}
            placeholder="XXX"
            id="cardCvv"
            {...register('cardCvv', {
              onChange(event) {
                event.target.value = event.target.value.replace(/\D/g, '')
              },
            })}
            style={{ width: '75px' }}
            maxLength={3}
          />
          <ErrorInputMessage message={errors.cardCvv?.message} />
        </div>
      </div>

      <div className="text-right">
        <DarktBtn
          width="w-40 h-12"
          type="submit"
          text={
            loading ? (
              <CircularProgress color="inherit" size={18} className="mt-1" />
            ) : (
              'Pay'
            )
          }
        />
      </div>
    </form>
  )
}

export default OrderPayment
