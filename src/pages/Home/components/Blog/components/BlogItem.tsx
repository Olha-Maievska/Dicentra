import { IBlogItem } from '@/common/dto/getBlogDto'
import { setArticle } from '@/features/portal/portalSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface BlogItemProps {
  data: IBlogItem
}

const BlogItem: FC<BlogItemProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  const addArticleToState = () => {
    dispatch(setArticle(data))
  }

  return (
    <Link
      className="w-1/3"
      to={`/portal/${data.id}`}
      onClick={addArticleToState}
    >
      <img
        className="w-full h-42 mb-7 bg-gray-200"
        src={`images/blog/${data.imgPath}`}
        alt={data.title}
      />
      <h3 className="text-center text-xl font-semibold mb-3">{data.title}</h3>
      <p className="text-center px-3">{data.describing}</p>
    </Link>
  )
}

export default BlogItem
