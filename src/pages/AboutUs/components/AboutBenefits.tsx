import {
  benefitsDataFirst,
  benefitsDataSecond,
  benefitsDataThird,
} from '../data'
import IntroItem from '@/pages/Home/components/Intro/components/IntroItem'

const AboutBenefits = () => {
  return (
    <div className="w-10/12 mx-auto mt-20">
      <h4 className="text-2xl font-medium text-dark mb-3 text-center">
        Our advantages
      </h4>
      <div className="mt-44 flex justify-between">
        {benefitsDataFirst.map((item) => (
          <IntroItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-between">
        {benefitsDataSecond.map((item) => (
          <IntroItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-between">
        {benefitsDataThird.map((item) => (
          <IntroItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default AboutBenefits
