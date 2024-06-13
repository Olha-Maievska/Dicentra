import { useEffect, useState } from 'react'
import Phone from './components/Phone'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setQuickOrder } from '@/features/forms/formsSlice'

const QuickOrderPhone = () => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)
  const [phone, setPhone] = useState('')
  const [title, setTitle] = useState('')
  const [isSend, setIsSend] = useState(false)
  const [numberOfOrder] = useState(Date.now())

  const handleChangePhone = (value: string) => {
    setPhone(value)
  }

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const quick_order = {
      id: crypto.randomUUID(),
      phone,
      numberOfOrder,
      products: cart,
    }

    dispatch(setQuickOrder(quick_order))

    setTitle('Thank you for the order!')
    setIsSend(true)
    setPhone('')
  }

  useEffect(() => {
    setTitle('Quick order')
    setIsSend(false)
  }, [])

  return (
    <div className="mt-7">
      <div className="font-medium mb-2">{title}</div>
      <div className="h-14">
        {isSend ? (
          <p>
            Your order number is{' '}
            <span className="font-medium">No. {numberOfOrder}</span>. Our
            manager will contact you soon to clarify the details of the order.
          </p>
        ) : (
          <form
            className="border bg-white border-gold border-solid rounded-full pr-8 flex justify-between bg-transparent"
            onSubmit={onSubmit}
          >
            <Phone
              value={phone}
              changeValue={handleChangePhone}
              borderColor="transparent"
            />
            <button
              className="uppercase text-gold text-md font-medium hover:text-btnPressedGold transition-all"
              type="submit"
              disabled={phone.length < 12}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuickOrderPhone
