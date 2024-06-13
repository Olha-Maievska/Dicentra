import { FC, FormEvent, useState } from 'react'
import QuickSelectionSelect from './components/QuickSelectionSelect'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { IFlowerItem, IFlowerKind } from '@/common/dto/getFlowersDto'
import { setSelectedDataByForm } from '@/features/flowers/flowersSlice'
import { useNavigate } from 'react-router-dom'

interface QuickSelectionFormProps {
  data: {
    flowers: {
      title: string
      data: string[]
    }
    events: {
      title: string
      data: string[]
    }
    budget: {
      title: string
      data: string[]
    }
  }
}

const QuickSelectionForm: FC<QuickSelectionFormProps> = ({ data }) => {
  const { list } = useAppSelector((state) => state.flowers)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    flowers: '',
    events: '',
    budget: '',
  })

  const onOptionChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { name, value },
    } = event
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const typeOfFlowers: IFlowerKind[] = []
    list.forEach((item) => {
      item.title.toLowerCase() === formData.flowers.toLowerCase()
        ? typeOfFlowers.push(item)
        : null
    })

    const eventsArr: IFlowerItem[] = []
    typeOfFlowers.forEach((item) =>
      item.flowers.forEach(
        (f) =>
          f.characteristic?.events.includes(formData.events) &&
          eventsArr.push(f)
      )
    )

    const pricesArr: IFlowerItem[] = []
    eventsArr.forEach((item) => {
      const prices = formData.budget.split(' ').filter((d) => d.search(/\D/g))
      const low = +prices[0]
      const high = +prices[1]
      if (prices.length === 1) {
        item.price >= low && pricesArr.push(item)
      } else {
        if (item.price >= low && item.price <= high) {
          pricesArr.push(item)
        } else return null
      }
    })

    dispatch(setSelectedDataByForm(pricesArr))
    navigate('selected_flowers')
    setFormData({ flowers: '', events: '', budget: '' })
  }

  return (
    <section className="bg-selection-form bg-no-repeat bg-cover bg-left-top w-full text-light text-center py-24">
      <div className="container">
        <h2 className="text-4xl font-medium">
          A beautiful bouquet is the best gift!
        </h2>
        <p className="text-lg font-light mt-4">
          Quick selection (we will select the ideal option for you)
        </p>

        <form
          className="mt-11 w-10/12 flex justify-between mx-auto"
          onSubmit={handleSubmitForm}
        >
          <QuickSelectionSelect
            name="flowers"
            selectData={data.flowers}
            onChange={onOptionChangeHandler}
          />
          <QuickSelectionSelect
            name="events"
            selectData={data.events}
            onChange={onOptionChangeHandler}
          />
          <QuickSelectionSelect
            name="budget"
            selectData={data.budget}
            onChange={onOptionChangeHandler}
          />

          <button
            className="py-5 px-16 bg-gold text-white rounded-xl text-base font-semibold font-ubuntu"
            type="submit"
          >
            Select
          </button>
        </form>
      </div>
    </section>
  )
}

export default QuickSelectionForm
