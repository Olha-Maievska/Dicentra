import PageWrapper, { NavItemProps } from '@/common/components/PageWrapper'
import { IBlogItem } from '@/common/dto/getBlogDto'
import { useAppSelector } from '@/hooks/hooks'

const renderNavData = (article: IBlogItem): NavItemProps[] => {
  return [
    {
      nav: 'Portal Dicentra',
      link: '/portal',
      isActive: false,
    },
    {
      nav: article.title,
      link: `/portal/${article.id}`,
      isActive: true,
    },
  ]
}

const SinglePortal = () => {
  const { article } = useAppSelector((state) => state.portal)

  if (!article) return

  return (
    <PageWrapper title={article.title} navArr={renderNavData(article)}>
      <div>
        <img
          className="w-full h-[412px] bg-gray-200 object-cover mb-12"
          src={`/images/blog/${article.imgPath}`}
          alt={article.title}
        />
        <div className="w-9/12 mx-auto">
          <span className="text-sm font-light text-gray">{article.date}</span>
          <div className="text-xl mb-8 font-ubuntu mt-2">
            {article.describing}
          </div>

          {article.text.map((t, i) => {
            return (
              <div className="mb-9 last:mb-0" key={t.subtitle + i}>
                <h5 className="text-2xl font-medium mb-4">{t.subtitle}</h5>
                <p className="text-md font-ubuntu font-light">{t.paragraph}</p>
              </div>
            )
          })}
        </div>
      </div>
    </PageWrapper>
  )
}

export default SinglePortal
