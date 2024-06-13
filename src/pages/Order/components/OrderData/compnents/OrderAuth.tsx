import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { setLoginModal } from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

const OrderAuth = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useAppSelector((state) => state.users)

  return (
    <div className="w-[334px]">
      {!currentUser ? (
        <>
          <p className="mb-6 font-light">
            Log in to the site, and we will save all information on the order
            and automatically fill in your contact information
          </p>
          <GoldBtn
            text="Log in"
            handleClick={() => dispatch(setLoginModal(true))}
            styles="w-40 py-3"
            type="button"
          />
        </>
      ) : null}
    </div>
  )
}

export default OrderAuth
