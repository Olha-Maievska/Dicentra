import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import OrderAuth from './compnents/OrderAuth'
import OrderPersonalData from './compnents/OrderPersonalData'
import QuickOrderPhone from '@/common/components/QuickOrderPhone'
import { addData } from '@/features/order/orderSlice'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import Input from '@/common/UI/Inputs/Input'

interface OrderDataProps {
  activeStep: number
  steps: number
  handleBack: () => void
  handleNext: () => void
}

const OrderData: FC<OrderDataProps> = ({
  activeStep,
  steps,
  handleBack,
  handleNext,
}) => {
  const { currentUser } = useAppSelector((state) => state.users)
  const { data } = useAppSelector((state) => state.order)
  const dispatch = useAppDispatch()

  const [phoneInput, setPhoneInput] = useState(data?.phone || '')
  const [dataValues, setDataValues] = useState({
    name: data?.fullName || '',
    email: data?.email || '',
  })
  const [phoneErorrMessage, setPhoneErorrMessage] = useState('')
  const [nameErorrMessage, setNameErorrMessage] = useState('')
  const [disabledNextBtn, setDisabledNextBtn] = useState(false)

  const handleChangePhone = (value: string) => {
    setPhoneInput(value)

    if (value.length < 12) {
      setPhoneErorrMessage('Phone number is too much short')
    } else {
      setPhoneErorrMessage('')
    }
  }

  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setDataValues({ ...dataValues, [name]: value })

    if (dataValues.name.length < 2) {
      setNameErorrMessage('Name should contain min 2 leters')
    } else {
      setNameErorrMessage('')
    }
  }

  const handleSubmit = () => {
    if (currentUser) {
      dispatch(
        addData({
          id: currentUser.id,
          fullName: currentUser.name,
          phone: currentUser.phone,
          email: currentUser?.email,
        })
      )
    } else {
      dispatch(
        addData({
          id: crypto.randomUUID(),
          fullName: dataValues.name,
          phone: phoneInput,
          email: dataValues.email,
        })
      )
    }

    handleNext()
  }

  useEffect(() => {
    if (phoneInput.length != 12) {
      setDisabledNextBtn(true)
    } else if (dataValues.name.length < 2) {
      setDisabledNextBtn(true)
    } else setDisabledNextBtn(false)
  }, [phoneInput.length, dataValues.name.length])

  useEffect(() => {
    if (currentUser?.name && currentUser.phone) {
      setDisabledNextBtn(false)
    }
  }, [currentUser])

  return (
    <>
      <h4 className="text-xl font-medium mb-6">Contact Information</h4>
      <form className="flex justify-between h-[260px]">
        {currentUser ? (
          <OrderPersonalData />
        ) : (
          <div className="border-b border-light">
            <div className="w-[356px]">
              <div className="mb-2">
                <Phone
                  value={data?.phone || phoneInput}
                  changeValue={(value) => handleChangePhone(value)}
                  borderColor={phoneErorrMessage && '#dc2626'}
                />
                <ErrorInputMessage message={phoneErorrMessage} />
              </div>
              <div className="mb-2">
                <Input
                  styles={`${
                    nameErorrMessage
                      ? 'border-red-600 focus:outline-red-600'
                      : 'focus:outline-gold border-transparent'
                  }`}
                  placeholder="First and last name"
                  value={dataValues.name}
                  name="name"
                  onChange={handleChangeValues}
                />
                <ErrorInputMessage message={nameErorrMessage} />
              </div>

              <div className="mb-2">
                <Input
                  type="email"
                  styles={'focus:outline-gold border-transparent'}
                  placeholder="E-mail (optional)"
                  value={dataValues.email}
                  name="email"
                  onChange={handleChangeValues}
                />
              </div>
            </div>
          </div>
        )}
        <OrderAuth />

        <div className="absolute bottom-12 flex justify-between right-12 left-12">
          <DarktBtn
            width="w-40 disabled:opacity-50 disabled:bg-dark"
            disabled={activeStep === 0}
            handleClick={handleBack}
            text="Back"
            type="button"
          />
          <DarktBtn
            width="w-40 disabled:opacity-50 disabled:bg-dark"
            type="button"
            disabled={disabledNextBtn}
            text={activeStep === steps ? 'Finish' : 'Next'}
            handleClick={handleSubmit}
          />
        </div>
      </form>
      <div className="w-[356px] border-t">
        <QuickOrderPhone />
      </div>
    </>
  )
}

export default OrderData
