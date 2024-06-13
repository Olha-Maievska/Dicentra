import { setBackCallModal } from '@/features/modal/modalSlice'
import { useAppDispatch } from '@/hooks/hooks'

const Phone = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-start">
      <a
        className="font-ubuntu font-light text-base text-dark"
        href={`tel:380989971991`}
      >
        +380 (98) 997-19-91
      </a>
      <button
        className="font-ubuntu text-gold mx-auto text-sm uppercase hover:text-btnPressedGold transition-all"
        onClick={() => dispatch(setBackCallModal(true))}
      >
        order a call back
      </button>
    </div>
  )
}

export default Phone
