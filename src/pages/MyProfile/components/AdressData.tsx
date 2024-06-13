import { ChangeEvent, FormEvent, useState } from 'react'
import { setCurrentUserAddress } from '@/features/users/usersSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import DataItem from './DataItem'
import { CircularProgress } from '@mui/material'
import AddressForm from './AddressForm'

const initialState = {
  city: '',
  street: '',
  number: '',
}

const AdressData = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useAppSelector((state) => state.users)
  const address = currentUser ? currentUser.address : undefined

  const [addressData, setAddressData] = useState(
    address ? address : initialState
  )
  const [editForm, setEditForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeAddressData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddressData({
      ...addressData,
      [name]: value,
    })
  }

  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleEditAddress = () => {
    setEditForm(true)

    handleLoading()
  }

  const handleCancelData = () => {
    if (address) {
      setEditForm(false)
    } else {
      setAddressData(initialState)
    }

    handleLoading()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isNotEmpty = Object.values(addressData).every((val) => val)

    if (!isNotEmpty) return

    const newAddressData = {
      id: currentUser!.id,
      ...addressData,
    }

    handleLoading()

    dispatch(setCurrentUserAddress(newAddressData))
    setEditForm(false)
  }

  return (
    <div className="w-5/12">
      <h4 className="text-3xl font-semibold mb-6">
        {!address ? 'Add address' : 'Your address'}
      </h4>

      {isLoading ? (
        <div className="bg-white h-[360px] flex items-center justify-center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div className="bg-white p-8 h-[360px]">
          {!address || editForm ? (
            <AddressForm
              addressData={addressData}
              handleSubmit={handleSubmit}
              changeValues={handleChangeAddressData}
              cancelBtn={handleCancelData}
            />
          ) : (
            <>
              <div className="border-b border-light mb-6">
                <DataItem prop="City" value={addressData.city} />
                <DataItem prop="Street" value={addressData.street} />
                <DataItem prop="Number" value={addressData.number} />
              </div>

              <button
                className="flex items-center text-gold hover:text-btnPressedGold transition-all"
                onClick={handleEditAddress}
              >
                <img
                  className="mr-2"
                  src="/images/icons/pen.svg"
                  alt="Edit data"
                />
                Edit address
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default AdressData
