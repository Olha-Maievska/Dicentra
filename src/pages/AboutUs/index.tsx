import PageWrapper from '@/common/components/PageWrapper'
import { aboutData } from './data'
import AboutUsItem from './components/AboutUsItem'
import AboutBenefits from './components/AboutBenefits'

const navArr = [{ nav: 'About us', link: '', isActive: true }]

const AboutUs = () => {
  return (
    <PageWrapper title="Dicentra.ua" navArr={navArr}>
      <div>
        {aboutData.map((item) => (
          <AboutUsItem key={item.title} item={item} />
        ))}
        <AboutBenefits />
      </div>
    </PageWrapper>
  )
}

export default AboutUs
