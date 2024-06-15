import { Header } from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'

const Layout = () => {
  return (
    <div className="flex flex-col relative">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />

      <Login />
      <Registration />
    </div>
  )
}

export default Layout
