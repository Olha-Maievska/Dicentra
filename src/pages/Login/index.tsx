import Modal from '@/common/components/Modal'
import {
  setLoginModal,
  setRegistrationModal,
} from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import LoginVsRegisterBottom from '@/common/components/LoginVsRegisterBottom'
import LoginForm from './components/LoginForm'

const Login = () => {
  const { loginModal } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const handleCloseModal = () => {
    dispatch(setLoginModal(false))
  }

  const openRegistrationModal = () => {
    dispatch(setRegistrationModal(true))
    handleCloseModal()
  }

  return (
    <Modal
      title="Sign in to your personal account"
      isOpen={loginModal}
      closeModal={handleCloseModal}
    >
      <>
        <LoginForm />

        <LoginVsRegisterBottom
          text="Don't have an account yet?"
          btnText="Register"
          openModal={openRegistrationModal}
        />
      </>
    </Modal>
  )
}

export default Login
