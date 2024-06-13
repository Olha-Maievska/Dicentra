import { useAppSelector } from '@/hooks/hooks'
import TotalRating from '../Reviews/components/TotalRating'

const Article = () => {
  const { flowerItem } = useAppSelector((state) => state.flowers)

  return (
    <div className="flex justify-between items-center pb-4 border-b border-light border-solid ">
      <span className="font-medium">
        {flowerItem?.inStock ? 'In stock' : 'Temporarily absent'}
      </span>
      {!flowerItem?.reviews?.length ? <span>No reviews</span> : <TotalRating />}
      <span className="bg-light py-1 px-3 rounded-full text-sm">
        Vendor code: {flowerItem?.article}
      </span>
    </div>
  )
}

export default Article
