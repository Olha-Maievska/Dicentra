import Modal from '@/common/components/Modal'
import {
  setLoginModal,
  setRegistrationModal,
} from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import LoginVsRegisterBottom from '@/common/components/LoginVsRegisterBottom'
import RegistrationForm from './component/RegistrationForm'
import { useEffect } from 'react'
import {
  resetRegistrationError,
  resetRegistrationMessage,
} from '@/features/users/usersSlice'

const Registration = () => {
  const { registrationModal } = useAppSelector((state) => state.modal)
  const { registrationStatus } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  const title =
    registrationStatus === 'success'
      ? 'Your registration was successful. Login to your account.'
      : registrationStatus === 'error'
        ? 'Something went wrong. Please? try again!'
        : 'Registration'

  const handleCloseModal = () => {
    dispatch(setRegistrationModal(false))
    dispatch(resetRegistrationError())
    dispatch(resetRegistrationMessage())
  }

  const openLoginModal = () => {
    dispatch(setLoginModal(true))
    handleCloseModal()
  }

  useEffect(() => {
    dispatch(resetRegistrationMessage())
    dispatch(resetRegistrationError())
    //eslint-disable-next-line
  }, [])

  return (
    <Modal
      title={title}
      isOpen={registrationModal}
      closeModal={handleCloseModal}
    >
      {registrationStatus === 'success' ? (
        <LoginVsRegisterBottom
          text="Already have an account?"
          btnText="Sign in"
          openModal={openLoginModal}
        />
      ) : registrationStatus === 'error' ? (
        <LoginVsRegisterBottom
          text="Don't have an account yet?"
          btnText="Register"
          openModal={() => dispatch(setRegistrationModal(true))}
        />
      ) : (
        <>
          <RegistrationForm />
          <LoginVsRegisterBottom
            text="Already have an account?"
            btnText="Sign in"
            openModal={openLoginModal}
          />
        </>
      )}
    </Modal>
  )
}

export default Registration
