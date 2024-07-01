import Logo from './components/Logo'
import UserIcon from './components/UserIcon'
import CartIcon from './components/Cart'
import Navigation from './components/Navigation'
import Phone from './components/Phone'
import { navData } from './data'
import ModalBackCall from './components/ModalBackCall'

export const Header = () => {
  return (
    <>
      <header className="w-full bg-white flex flex-col items-center fixed z-40 pb-5">
        <div className="container">
          <div className="mt-6 mb-8 flex items-end justify-between">
            <Phone />
            <Logo />

            <div className="flex items-center justify-between">
              <UserIcon />
              <CartIcon />
            </div>
          </div>
          <Navigation data={navData} />
        </div>
      </header>
      <ModalBackCall />
    </>
  )
}
