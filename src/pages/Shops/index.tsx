import PageWrapper from '@/common/components/PageWrapper'
import { shopsData } from './data'
import ShopsItem from './components/ShopsItem'

const navData = [{ nav: 'Shops', link: '', isActive: true }]

const Shops = () => {
  return (
    <PageWrapper title="Shops" navArr={navData}>
      <div>
        {shopsData.map((shop) => (
          <ShopsItem key={shop.id} item={shop} />
        ))}
      </div>
    </PageWrapper>
  )
}

export default Shops
