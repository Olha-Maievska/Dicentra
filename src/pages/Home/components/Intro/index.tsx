import { IIntroData } from '@/common/dto/getIntroDto'
import IntroItem from './components/IntroItem'
import { FC } from 'react'

interface IntroProps {
  data: IIntroData
  description?: string
}

const Intro: FC<IntroProps> = ({ data, description }) => {
  return (
    <section className="relative">
      <div className="container">
        <p className="font-medium text-xl w-[400px] mb-32 ml-28">
          {description}
        </p>

        <div className="flex justify-around mb-48 flex-wrap">
          {data?.map((item) => (
            <IntroItem key={item.id} {...item} />
          ))}
        </div>

        <div className="absolute -top-20 right-0">
          <img src="images/intro/intro-fone.png" alt="intro" />
        </div>
      </div>
    </section>
  )
}

export default Intro
