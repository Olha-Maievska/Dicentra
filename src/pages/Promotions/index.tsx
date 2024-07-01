import PageWrapper from '@/common/components/PageWrapper'
import { promotionData } from './data'
import ActionCarousel from '../Home/components/ActionCarousel'
import { usePromotionTime } from '@/hooks/hooks'

const navArr = [{ nav: 'Promotions', link: '', isActive: true }]

const Promotions = () => {
  const { days, hours, minutes, seconds } = usePromotionTime(
    promotionData.dataUntil
  )

  return (
    <>
      <PageWrapper title="Promotions Dicentra" navArr={navArr}>
        <div className="w-11/12 text-dark text-lg">
          <div className="flex items-center mb-8">
            <img
              className="w-[400px] h-[240px] object-cover mr-10"
              src={`/images/promotion/promotion.jpg`}
              alt="promotion"
            />
            <div>
              <h4 className="text-2xl font-medium mb-3">
                {promotionData.title}
              </h4>
              <div className="text-2xl font-medium mb-2">
                Promocode:{' '}
                <span className="py-2 px-3 bg-gold text-white rounded-full uppercase ml-1">
                  {promotionData.promocode}
                </span>
              </div>
              <div>Until the end there is:</div>
              <div className="font-semibold text-3xl my-2">
                {days} : {hours} : {minutes} : {seconds}
              </div>
              <div className="text-xs mb-3">
                <span className="mr-10 ml-1">day</span>
                <span className="mr-8">hour</span>
                <span className="mr-10">min</span>
                <span>sec</span>
              </div>
              <div>
                The promotion is valid until:{' '}
                <span className="font-medium">{promotionData.dataUntil}</span>
              </div>
            </div>
          </div>
          <p className="mb-5">
            To receive a discount, purchase a coupon; after purchase, the coupon
            will appear in your personal account. Copy the code specified in the
            coupon you received and indicate it in the comments to your order.
          </p>
          <p>
            The manager will recalculate the discount when confirming the order.
            Bouquet arrangements may vary depending on your preferences. Coupon
            discounts cannot be combined with other promotional offers.
          </p>
        </div>
      </PageWrapper>
      <div className="-mt-28 bg-light pb-14">
        <ActionCarousel />
      </div>
    </>
  )
}

export default Promotions
