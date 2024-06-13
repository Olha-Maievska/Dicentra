import { FC } from 'react'
import BlogItem from './components/BlogItem'
import { useNavigate } from 'react-router-dom'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { IBlogData } from '@/common/dto/getBlogDto'

interface BlogProps {
  title: string
  data: IBlogData
}

const Blog: FC<BlogProps> = ({ title, data }) => {
  const navigate = useNavigate()

  return (
    <section className="mt-28 mb-40">
      <div className="container">
        <h1 className="text-4xl mb-10 text-center font-medium">{title}</h1>

        <div className="flex mb-16">
          {data?.slice(0, 3).map((item) => (
            <BlogItem key={item.id} data={item} />
          ))}
        </div>

        <div className="text-center">
          <DarktBtn
            text="See all portal"
            width="w-36"
            handleClick={() => navigate('portal')}
          />
        </div>
      </div>
    </section>
  )
}

export default Blog
