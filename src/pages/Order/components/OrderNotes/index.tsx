import { FC, useEffect, useState } from 'react'
import { notesData } from './data'
import { ArrowNext, ArrowPrev } from '@/common/UI/Arrows'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  setActiveCardData,
  setCart,
  setNoteMessage,
} from '@/features/order/orderSlice'
import { INotesData } from '@/common/dto/getOrderDto'
import OrderNotesItem from './components/OrderNotesItem'

interface OrderNotesProps {
  activeStep: number
  steps: number
  handleBack: () => void
  handleNext: () => void
}

const OrderNotes: FC<OrderNotesProps> = ({
  activeStep,
  steps,
  handleBack,
  handleNext,
}) => {
  const dispatch = useAppDispatch()
  const { noteMessage, activeCardData, card } = useAppSelector(
    (state) => state.order
  )

  const itemWidth = 190
  const wrapperWidth = itemWidth * notesData.length
  const [offset, setOffset] = useState(activeCardData?.cardOffset || 0)
  const [countSlides, setCountSlides] = useState(4)
  const [activeIndex, setActiveIndex] = useState(activeCardData?.cardIndex || 0)
  const [noteText, setNoteText] = useState(noteMessage || '')

  const [disabledNextBtn, setDisabledNextBtn] = useState(false)

  const handleRightClick = () => {
    setOffset((offset) => offset - itemWidth)

    if (countSlides === notesData.length) {
      return
    } else {
      setCountSlides((prev) => prev + 1)
    }
  }

  const handleLeftClick = () => {
    if (!offset) return

    setOffset((offset) => offset + itemWidth)
    setCountSlides((prev) => prev - 1)
  }

  const handleAddCard = (index: number, card: INotesData) => {
    setActiveIndex(index)
    dispatch(setCart(card))
  }

  const handleAddCardAndNotes = () => {
    dispatch(setNoteMessage(noteText))
    dispatch(setActiveCardData({ cardIndex: activeIndex, cardOffset: offset }))

    handleNext()
  }

  useEffect(() => {
    if (!noteText) {
      setDisabledNextBtn(true)
    } else {
      setDisabledNextBtn(false)
    }
  }, [noteText])

  useEffect(() => {
    if (!card) {
      dispatch(setCart(notesData[0]))
    }
  }, [card, dispatch])

  return (
    <>
      <div className="mb-6">
        <div className="relative mb-6">
          <div className="overflow-hidden w-full">
            <div
              className="flex justify-between transition-transform"
              style={{
                width: `${wrapperWidth}px`,
                transform: `translateX(${offset}px)`,
              }}
            >
              {notesData.map((item, i) => (
                <OrderNotesItem
                  key={item.id}
                  activeIndex={activeIndex}
                  handleClick={handleAddCard}
                  index={i}
                  item={item}
                  width={itemWidth}
                />
              ))}
            </div>
          </div>
          <ArrowNext
            handleClick={handleRightClick}
            dataLenght={notesData?.length}
            countSlides={countSlides}
            cssStyles="top-20 -right-3 bg-dark border-dark"
            fillColor="#fff"
          />
          <ArrowPrev
            handleClick={handleLeftClick}
            offset={!!offset}
            cssStyles="top-20 -left-6 bg-dark border-dark"
            fillColor="#fff"
          />
        </div>
        <textarea
          className="w-full h-36 rounded-3xl resize-none p-5 focus:outline-gold"
          name="noteText"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter the text of your note"
        ></textarea>
      </div>
      <div className="absolute bottom-12 flex justify-between right-12 left-12">
        <DarktBtn
          width="w-40 disabled:opacity-50 disabled:bg-dark"
          disabled={activeStep === 0}
          handleClick={handleBack}
          text="Back"
          type="button"
        />
        <DarktBtn
          width="w-40 disabled:opacity-50 disabled:bg-dark"
          type="button"
          disabled={disabledNextBtn}
          text={activeStep === steps ? 'Finish' : 'Next'}
          handleClick={handleAddCardAndNotes}
        />
      </div>
    </>
  )
}

export default OrderNotes
