import { FC } from 'react'
import { Drawer } from '@mui/material'

interface ModalProps {
  children: JSX.Element
  isOpen: boolean
  closeModal: () => void
  title: string
}

const Modal: FC<ModalProps> = ({ children, isOpen, closeModal, title }) => {
  return (
    <>
      <Drawer anchor={'right'} open={isOpen} onClose={closeModal}>
        <div
          className="w-[580px] h-full bg-light flex justify-center items-center "
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeModal}
          >
            <img
              className="w-9 h-9"
              src="/images/icons/close.svg"
              alt="close"
            />
          </div>
          <div className="w-[350px] text-dark">
            <h2 className="text-2xl font-medium text-center mb-6">{title}</h2>
            {children}
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0"
          src="/images/fones/tulips.png"
          alt=""
        />
      </Drawer>
    </>
  )
}

export default Modal
