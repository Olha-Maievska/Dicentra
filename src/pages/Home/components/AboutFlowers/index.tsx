import { IIntroData } from '@/common/dto/getIntroDto'
import { FC } from 'react'

interface AboutFlowersProps {
  data: IIntroData
  title: string | undefined
}

const AboutFlowers: FC<AboutFlowersProps> = ({ data, title }) => {
  return (
    <section className="my-28">
      <div className="container relative">
        <p className="font-medium text-xl w-4/12 mb-32">{title}</p>

        <div className="flex flex-wrap items-center">
          {data.map((item, ind) => (
            <div
              key={item.id}
              className={`w-1/3 text-base ${item?.marginToTop}`}
            >
              <img
                className={`bg-gray-200 object-cover w-[307px] ${
                  !ind || ind === data.length - 1 ? 'h-[360px]' : 'h-[232px]'
                }`}
                src={`images/intro/${item.imgPath}`}
                alt={item.title}
              />
              <h4 className="text-xl my-5 font-semibold">{item.title}</h4>
              <p className="w-8/12">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFlowers
