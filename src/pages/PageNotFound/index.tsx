import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navidate = useNavigate()
  return (
    <section className="bg-light h-screen flex justify-center items-center flex-col">
      <div className="container">
        <div className="relative flex justify-between items-center border border-gold border-solid px-40 py-32 mx-auto mb-10">
          <p className="text-4xl">
            Whoopss...
            <div>Page not found! </div>
          </p>
          <div className="text-gold font-medium text-[144px]">404</div>

          <div className="absolute -top-4 -right-10">
            <img src="/images/intro/intro-fone.png" alt="intro" />
          </div>
        </div>
      </div>
      <DarktBtn text="To home" width="w-48" handleClick={() => navidate('/')} />
    </section>
  )
}

export default PageNotFound
