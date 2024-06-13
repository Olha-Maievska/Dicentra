import { ChangeEvent, FC, useEffect, useState } from 'react'
import ByCourier from './components/ByCourier'
import InStore from './components/InStore'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { addDelivery } from '@/features/order/orderSlice'
import Tabs from './components/Tabs'

interface OrderDeiveryProps {
  activeStep: number
  steps: number
  handleBack: () => void
  handleNext: () => void
}

const OrderDeivery: FC<OrderDeiveryProps> = ({
  activeStep,
  steps,
  handleBack,
  handleNext,
}) => {
  const { currentUser } = useAppSelector((state) => state.users)
  const { delivery } = useAppSelector((state) => state.order)
  const [disabledNextBtn, setDisabledNextBtn] = useState(false)
  const dispatch = useAppDispatch()

  const [dataAtr, setDataAtr] = useState('')

  const [recipient, setRecipient] = useState({
    name: delivery?.recipientData?.name || '',
    phone: delivery?.recipientData?.phone || '',
  })

  const [addressData, setAddressData] = useState({
    city: currentUser?.address?.city || delivery?.city || '',
    street: currentUser?.address?.street || delivery?.street || '',
    number: currentUser?.address?.number || delivery?.number || '',
    recipient: delivery?.recipient || '',
    wishes: delivery?.wishes || '',
  })

  const [storeData, setStoreData] = useState({
    storeIn: delivery?.storeIn || '',
    date: delivery?.date || '',
    hours: delivery?.hours || '',
  })

  const handleChangeAddress = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event

    setAddressData({ ...addressData, [name]: value })
  }

  const handleChangeStoreData = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setStoreData({ ...storeData, [name]: value })
  }

  const handleSetDelivery = () => {
    if (dataAtr === 'byCourier') {
      dispatch(
        addDelivery({
          method: 'byCourier',
          ...addressData,
          recipientData: recipient,
        })
      )
    } else {
      dispatch(
        addDelivery({
          method: 'inStore',
          ...storeData,
        })
      )
    }
    handleNext()
  }

  useEffect(() => {
    if (delivery?.method) {
      setDataAtr(delivery?.method)
    } else {
      setDataAtr('byCourier')
    }
  }, [delivery?.method])

  useEffect(() => {
    if (dataAtr === 'byCourier') {
      const isValues = Object.values(addressData).every((val) => val)
      if (!isValues) {
        setDisabledNextBtn(true)
      } else {
        setDisabledNextBtn(false)
      }
    } else {
      const isValues = Object.values(storeData).every((val) => val)

      if (!isValues) {
        setDisabledNextBtn(true)
      } else {
        setDisabledNextBtn(false)
      }
    }
  }, [addressData, storeData, dataAtr])

  return (
    <div>
      <h4 className="text-xl font-medium mb-6">Delivery method {}</h4>
      <>
        <Tabs setDataAtr={setDataAtr} />
        <>
          {dataAtr === 'byCourier' ? (
            <ByCourier
              data={addressData}
              recipientData={recipient}
              recipientChangeData={setRecipient}
              handleClickData={handleChangeAddress}
            />
          ) : (
            <InStore
              data={storeData}
              handleChangeData={handleChangeStoreData}
            />
          )}
        </>
      </>
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
          handleClick={handleSetDelivery}
        />
      </div>
    </div>
  )
}

export default OrderDeivery
