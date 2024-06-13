import { useAppSelector } from '@/hooks/hooks'

const OrderPersonalData = () => {
  const { currentUser } = useAppSelector((state) => state.users)

  return (
    <div className="w-[356px]">
      <div className="text-md mb-5">
        First and Last name:{' '}
        <span className="font-medium ml-5 text-xl">{currentUser?.name}</span>
      </div>
      <div className="text-md mb-5 ">
        Phone:{' '}
        <span className="font-medium ml-5 text-xl">+{currentUser?.phone}</span>
      </div>
      <div className="text-md mb-5 ">
        Email:{' '}
        <span
          className={`ml-5 text-xl ${currentUser?.email ? 'font-medium' : 'font-light'}`}
        >
          {currentUser?.email ? currentUser?.email : 'not indicated'}
        </span>
      </div>
    </div>
  )
}

export default OrderPersonalData
