import PortalItem from './components/PortalItem'
import PageWrapper from '@/common/components/PageWrapper'
import { portalData } from './data'

const navArr = [{ nav: 'Portal Dicentra', link: '', isActive: true }]

const Portal = () => {
  return (
    <PageWrapper title="Portal Dicentra" navArr={navArr}>
      <div className="flex flex-wrap">
        {portalData?.map((item) => <PortalItem key={item.id} item={item} />)}
      </div>
    </PageWrapper>
  )
}

export default Portal
