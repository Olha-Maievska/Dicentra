import { FC, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface PhoneProps {
  value: string
  changeValue: (value: string) => void
  borderColor?: string
}

const Phone: FC<PhoneProps> = ({ value, changeValue, borderColor }) => {
  const [phoneFocus, setPhoneFocus] = useState(false)

  return (
    <PhoneInput
      country={'ua'}
      onlyCountries={['ua', 'cz']}
      regions={'europe'}
      placeholder="phone number"
      searchClass="border-0 focus:outline-transparent"
      inputStyle={{
        fontSize: 16,
        padding: '24px 20px 24px 60px',
        background: '#fff',
        borderWidth: '3px',
        borderRadius: '30px',
        borderColor: `${
          borderColor ? borderColor : phoneFocus ? '#b69b89' : 'transparent'
        }`,
        outline: 'transparent',
        width: '100%',
      }}
      buttonStyle={{
        border: 'none',
        background: 'transparent',
        marginLeft: '20px',
        height: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      value={value}
      onChange={changeValue}
      onBlur={() => setPhoneFocus(false)}
      onFocus={() => setPhoneFocus(true)}
    />
  )
}

export default Phone
