import { ChangeEvent, FC, FormEvent } from 'react'
import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { IUserAddress } from '@/common/dto/getUsersDto'
import DataInput from './DataInput'

interface AddressFormProps {
  addressData: IUserAddress
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  changeValues: (e: ChangeEvent<HTMLInputElement>) => void
  cancelBtn: () => void
}

const AddressForm: FC<AddressFormProps> = ({
  addressData,
  handleSubmit,
  changeValues,
  cancelBtn,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <DataInput name="city" value={addressData.city} onChange={changeValues} />
      <DataInput
        name="street"
        value={addressData.street}
        onChange={changeValues}
      />
      <DataInput
        name="number"
        value={addressData.number}
        onChange={changeValues}
      />
      <div className="pt-6">
        <GoldBtn
          text="Save"
          styles="uppercase leading-none px-7 py-3 mr-4"
          type="submit"
        />

        <button
          className="text-gold hover:text-btnPressedGold transition-all"
          onClick={cancelBtn}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default AddressForm
