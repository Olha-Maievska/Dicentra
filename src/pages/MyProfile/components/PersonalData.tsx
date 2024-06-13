import { ChangeEvent, FormEvent, useState } from 'react'
import { changeCurrentUserData } from '@/features/users/usersSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import DataItem from './DataItem'
import { CircularProgress } from '@mui/material'
import PersonalDataForm from './PersonalDataForm'
import EditBtn from './EditBtn'
import PasswordForm from './PasswordForm'

const initialState = {
  name: '',
  phone: '',
  email: '',
}

const PersonalData = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useAppSelector((state) => state.users)

  const [personalData, setPersonalData] = useState(
    currentUser
      ? {
          name: currentUser?.name,
          phone: currentUser?.phone,
          email: currentUser?.email,
        }
      : initialState
  )
  const [editForm, setEditForm] = useState(false)
  const [passwordForm, setPasswordForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeAddressData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPersonalData({
      ...personalData,
      [name]: value,
    })
  }

  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleEditForm = () => {
    setEditForm(!editForm)

    handleLoading()
  }

  const handlePasswordForm = () => {
    setPasswordForm(!passwordForm)

    handleLoading()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isNotEmpty = Object.values(personalData).every((val) => val)

    if (!isNotEmpty) return

    const newData = {
      id: currentUser!.id,
      ...personalData,
    }

    handleLoading()

    dispatch(changeCurrentUserData(newData))
    setEditForm(false)
  }

  return (
    <div className="w-5/12">
      <h4 className="text-3xl font-semibold mb-6">Personal data</h4>

      {isLoading ? (
        <div className="bg-white h-[360px] flex items-center justify-center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div className="bg-white p-8 h-[360px]">
          {editForm ? (
            <PersonalDataForm
              data={personalData}
              handleSubmit={handleSubmit}
              changeValues={handleChangeAddressData}
              cancelBtn={handleEditForm}
            />
          ) : passwordForm ? (
            <PasswordForm cancelBtn={handlePasswordForm} />
          ) : (
            <>
              <div className="border-b border-light mb-6">
                <DataItem prop="Name" value={personalData.name} />
                <DataItem prop="Phone" value={`+${personalData.phone}`} />
                <DataItem prop="Email" value={personalData.email} />
              </div>

              <div>
                <EditBtn
                  text="Change password"
                  imgPath="lock.svg"
                  onClick={handlePasswordForm}
                />

                <div className="mt-2">
                  <EditBtn
                    text="Edit data"
                    imgPath="pen.svg"
                    onClick={handleEditForm}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default PersonalData
