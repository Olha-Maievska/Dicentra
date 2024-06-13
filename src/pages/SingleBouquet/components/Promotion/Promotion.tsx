import { usePromotionTime } from '@/hooks/hooks'
import { promotionData } from '@/pages/Promotions/data'
import { Link } from 'react-router-dom'

const Promotion = () => {
  const { days, hours, minutes, seconds } = usePromotionTime(
    promotionData.dataUntil
  )
  return (
    <div className="mt-3 flex text-dark">
      <div className="border border-gold p-1.5 rounded-full mr-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="/images/promotion/promotion.jpg"
          alt="promotion"
        />
      </div>
      <div className="mr-5">
        <h5 className="font-medium">{promotionData.title}</h5>
        <div className="text-sale">
          {' '}
          {days}d : {hours}h : {minutes}m : {seconds}s
        </div>
      </div>
      <div>
        <Link to="/promotions" className="text-gold">
          More details
        </Link>
      </div>
    </div>
  )
}

export default Promotion
