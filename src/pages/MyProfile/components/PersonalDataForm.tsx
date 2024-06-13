import { ChangeEvent, FC, FormEvent } from 'react'
import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { IUser } from '@/common/dto/getUsersDto'
import DataInput from './DataInput'

interface PersonalDataFormProps {
  data: Pick<IUser, 'name' | 'phone' | 'email'>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  changeValues: (e: ChangeEvent<HTMLInputElement>) => void
  cancelBtn: () => void
}

const PersonalDataForm: FC<PersonalDataFormProps> = ({
  data,
  handleSubmit,
  changeValues,
  cancelBtn,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <DataInput name="name" value={data.name} onChange={changeValues} />
      <DataInput name="phone" value={data.phone} onChange={changeValues} />
      <DataInput name="email" value={data.email} onChange={changeValues} />
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

export default PersonalDataForm
