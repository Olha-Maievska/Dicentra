import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import Input from '@/common/UI/Inputs/Input'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import { setOrderByPhoto } from '@/features/forms/formsSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { shortFileName } from '@/utils/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircularProgress } from '@mui/material'
import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/pdf',
  'image/JPEG',
  'image/PNG',
  'image/PDF',
]

const imageSchema = z
  .any()
  .optional()
  .refine(
    (file) =>
      file.length == 1
        ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
          ? true
          : false
        : true,
    '.jpeg, .pdf and .png files are accepted.'
  )
  .refine(
    (file) =>
      file.length == 1 ? (file[0]?.size <= MAX_FILE_SIZE ? true : false) : true,
    'Max file size allowed is 8MB.'
  )
  .refine((file) => file.length > 0, 'File is required')

const detailsShema = z.object({
  name: z.string().min(2),
  photo: imageSchema,
})

type DetailsShemValues = z.infer<typeof detailsShema>

interface OrderByPhotoFormProps {
  setStatusMessage: Dispatch<SetStateAction<string>>
}

const OrderByPhotoForm: FC<OrderByPhotoFormProps> = ({ setStatusMessage }) => {
  const dispatch = useAppDispatch()
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState<File | undefined>()
  const [phoneInput, setPhoneInput] = useState('')
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsShemValues>({
    defaultValues: {
      name: '',
      photo: null,
    },
    resolver: zodResolver(detailsShema),
    mode: 'onChange',
  })

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList
    }
    setFile(target.files[0])
    setFileName(target.files[0].name)
  }

  const handleChangeValue = (value: string) => {
    setPhoneInput(value)

    if (value.length < 12) {
      setPhoneErrorMessage('Phone number too much short')
    } else {
      setPhoneErrorMessage('')
    }
  }

  const onSubmit = handleSubmit((data) => {
    if (typeof file === 'undefined') return

    if (!phoneInput) return setPhoneErrorMessage('Phone number is required!')

    const order = {
      id: crypto.randomUUID(),
      name: data.name,
      phoneNumber: phoneInput,
      photo: file,
    }

    dispatch(setOrderByPhoto(order))
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setStatusMessage(
        'Thank you! Your manager will contact you shortly to clarify details.'
      )
      reset()
      setFileName('')
      setPhoneInput('')
    }, 600)
  })

  return (
    <form className="w-[298px] mr-40" onSubmit={onSubmit}>
      <Input
        styles={`py-4
          ${
            errors.name?.message
              ? 'border-red-600 focus:outline-red-600'
              : 'focus:outline-gold border-transparent'
          }
            `}
        placeholder="Name"
        {...register('name', {
          onChange(event) {
            event.target.value = event.target.value.replace(/[^a-zA-Z]+/g, '')
          },
        })}
      />

      <ErrorInputMessage message={errors.name?.message} />

      <Phone
        value={phoneInput}
        borderColor={phoneErrorMessage && '#dc2626'}
        changeValue={(value) => handleChangeValue(value)}
      />

      <ErrorInputMessage message={phoneErrorMessage} />

      <div className="text-center mt-2 text-xl text-dark font-medium">
        Photo of the bouquet
      </div>
      <div className="w-full mt-2 rounded-full relative">
        <input
          className="w-full absolute top-0 left-0 right-0 py-4 rounded-full bg-transparent border-none focus:outline-gold opacity-0 z-10"
          type="file"
          accept="image/png, image/pdf, image/jpg"
          {...register('photo', {
            required: 'Photo is required!',
            onChange: (e) => handleChange(e),
          })}
        />
        <div className="absolute w-full py-3 bg-gold top-0 left-0 right-0 rounded-full text-light text-md cursor-pointer flex justify-center">
          <img
            className={`${!fileName ? 'mr-2 block' : 'hidden'}`}
            src="images/icons/upload.svg"
            alt="upload"
          />
          {!fileName ? 'Upload a photo' : shortFileName(fileName)}
        </div>
      </div>

      {!errors.photo?.message ? (
        <div className="text-center mt-[60px]">
          Upload files (PNG, JPEG, PDF)
        </div>
      ) : (
        <div className="text-center text-red-600 mt-[60px]">
          {errors.photo?.message.toString()}
        </div>
      )}

      <DarktBtn
        width="w-full mt-4 disabled:opacity-75 disabled:bg-dark"
        type="submit"
        text={
          loading ? (
            <CircularProgress color="primary" size={16} />
          ) : (
            'Find out the cost'
          )
        }
        disabled={!fileName}
      />
    </form>
  )
}

export default OrderByPhotoForm
