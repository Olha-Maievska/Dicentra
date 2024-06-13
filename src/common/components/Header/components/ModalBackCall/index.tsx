import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import Input from '@/common/UI/Inputs/Input'
import Modal from '@/common/components/Modal'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import { getBackCall } from '@/features/forms/formsSlice'
import { setBackCallModal } from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useEffect, useState } from 'react'
import ModalCallBackText from './components/ModalCallBackText'

const ModalBackCall = () => {
  const { backCall } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [disabledBtn, setDisabledBtn] = useState(false)
  const handleChangePhone = (value: string) => {
    setPhone(value)

    if (value.length < 12) {
      setPhoneError('Phone number too much short')
    } else {
      setPhoneError('')
    }
  }

  const handleChangeName = (value: string) => {
    setName(value)

    if (value.length < 3) {
      setNameError('Name must contains at least 3 letters')
    } else {
      setNameError('')
    }
  }

  const handleSendForm = () => {
    if (!phone || !name) return

    const date = new Date().toLocaleString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    dispatch(getBackCall({ name, phoneNumber: phone, createdAt: date }))
    setStatusMessage(
      'Your application is accepted. We will contact you shortly'
    )

    setPhone('')
    setName('')

    setTimeout(() => setStatusMessage(''), 5000)
  }

  useEffect(() => {
    if (!phone) {
      setDisabledBtn(true)
    } else if (!name) {
      setDisabledBtn(true)
    } else {
      setDisabledBtn(false)
    }
  }, [phone, name])

  return (
    <Modal
      title={statusMessage ? 'Thank you!' : 'Back call'}
      isOpen={backCall}
      closeModal={() => dispatch(setBackCallModal(false))}
    >
      <div className="text-dark">
        {statusMessage ? (
          <ModalCallBackText text={statusMessage} />
        ) : (
          <>
            <ModalCallBackText text="Enter your name and phone number, we will contact you shortly" />
            <form>
              <div className="mb-2">
                <Input
                  value={name}
                  placeholder="Your name"
                  styles={`${
                    nameError
                      ? 'border-red-600 focus:outline-red-600'
                      : 'focus:outline-gold border-transparent'
                  }`}
                  onChange={(e) => handleChangeName(e.target.value)}
                />
                <ErrorInputMessage message={nameError} />
              </div>
              <div className="mb-2">
                <Phone
                  value={phone}
                  changeValue={(value) => handleChangePhone(value)}
                  borderColor={phoneError && '#dc2626'}
                />
                <ErrorInputMessage message={phoneError} />
              </div>

              <DarktBtn
                width="w-full mx-auto disabled:opacity-75 disabled:bg-dark"
                text="Send"
                handleClick={handleSendForm}
                disabled={disabledBtn}
              />
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}

export default ModalBackCall
