import PersonalData from './components/PersonalData'
import AdressData from './components/AdressData'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch } from '@/hooks/hooks'
import { resetCurrentUser } from '@/features/users/usersSlice'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(resetCurrentUser())
    navigate('/')
  }

  return (
    <div className="bg-light h-screen text-dark pt-56">
      <div className="container">
        <div className="border border-white p-16 flex justify-between relative mb-10">
          <PersonalData />
          <AdressData />

          <img
            className="absolute -right-28 top-1/2 -translate-y-1/2"
            src="/images/intro/intro-fone.png"
            alt="intro-fone"
          />
          <img
            className="absolute left-0 bottom-0 opacity-75"
            src="/images/fones/leaves.png"
            alt="intro-fone"
          />
        </div>
        <div className="text-center">
          <DarktBtn width="w-36" text="Log out" handleClick={handleLogOut} />
        </div>
      </div>
    </div>
  )
}

export default MyProfile
