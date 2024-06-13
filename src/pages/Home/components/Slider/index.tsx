import { FC, useState } from 'react'
import SliderItem from './components/SliderItem'
import { ISliderData } from '@/common/dto/getSliderDto'

interface SliderProps {
  data: ISliderData
}

const Slider: FC<SliderProps> = ({ data }) => {
  const [slider, setSlider] = useState(0)

  const handleNext = (index: number) => {
    if (index === data.length - 1) {
      setSlider(0)
    } else {
      setSlider(index + 1)
    }
  }

  const handlePrev = (index: number) => {
    if (index === 0) {
      setSlider(data.length - 1)
    } else {
      setSlider(index - 1)
    }
  }

  return (
    <div className="w-full mb-32 pt-32 h-screen overflow-hidden">
      {data?.map((slide, i) => (
        <SliderItem
          key={slide.img}
          item={slide}
          activeClass={slider === i}
          next={() => handleNext(i)}
          prev={() => handlePrev(i)}
        />
      ))}
    </div>
  )
}

export default Slider
