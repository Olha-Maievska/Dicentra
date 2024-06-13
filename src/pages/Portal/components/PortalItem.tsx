import { IBlogItem } from '@/common/dto/getBlogDto'
import { setArticle } from '@/features/portal/portalSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface PortalItemProps {
  item: IBlogItem
}

const PortalItem: FC<PortalItemProps> = ({ item }) => {
  const dispatch = useAppDispatch()

  const addArticleToState = () => {
    dispatch(setArticle(item))
  }

  return (
    <Link
      className="w-1/2 odd:pr-5 even:pl-5 text-center cursor-pointer hover:text-gold transition-all"
      to={`/portal/${item.id}`}
      onClick={addArticleToState}
      relative="path"
    >
      <img
        className="w-full h-56 object-cover mb-4 bg-gray-200"
        src={`/images/blog/${item.imgPath}`}
        alt={item.title}
      />
      <div className="text-sm mb-2">{item.date}</div>
      <div className="text-xl font-medium mb-4 h-10">{item.title}</div>
      <div className="text-sm mb-8 h-20">{item.describing}</div>
    </Link>
  )
}

export default PortalItem
