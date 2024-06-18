import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { NavLink } from 'react-router-dom'
import { setPriceWithCount } from '@/features/flowers/flowersSlice'
import Promotion from './components/Promotion/Promotion'
import Price from './components/Price/Price'
import Tabs from './components/Tabs'
import Article from './components/Article'
import MainImg from './components/MainImg'
import Chocolates from '@/common/components/Chocolates'
import Reviews from './components/Reviews'
import ReviewsModal from './components/ReviewsModal'
import WithChocolates from './components/WithChocolates'
import QuickOrderPhone from '@/common/components/QuickOrderPhone'
import Count from './components/Count'

const imagesArray = Array(4).fill(0)

const SingleBouquet = () => {
  const dispatch = useAppDispatch()
  const { flowerItem } = useAppSelector((state) => state.flowers)

  const [imgMainPath, setImgMainPath] = useState('')
  const [imgIndex, setImgIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleImgPath = (ind: number, path: string) => {
    setImgIndex(ind)
    setImgMainPath(path)
    setLoading(true)

    setTimeout(() => setLoading(false), 300)
  }

  useEffect(() => {
    dispatch(setPriceWithCount())
  }, [dispatch])

  useEffect(() => {
    setImgMainPath(flowerItem!.img)
  }, [flowerItem])

  return (
    <section className="pt-48 bg-light relative font-roboto min-h-screen">
      <div className="container">
        <ul className="flex justify-center mb-8 text-sm text-dark">
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/bouquets">All bouquets</NavLink>
          </li>
          <li>
            <NavLink to="" className={'font-semibold'}>
              {flowerItem?.name}
            </NavLink>
          </li>
        </ul>
        <h2 className="text-center text-4xl font-medium mb-9 text-dark">
          {flowerItem?.name}
        </h2>

        <div className="bg-white p-4 flex items-center ">
          <div className="w-2/12">
            {imagesArray.map((img, i) => (
              <div
                key={`${img}${i}`}
                className={`${
                  i === imgIndex ? 'opacity-100' : 'opacity-50'
                } h-36 w-full mb-3 cursor-pointer transition-all`}
                onClick={() => handleImgPath(i, flowerItem!.img)}
              >
                <img
                  className="w-[135px] h-[140px] object-contain"
                  src={`/images/products/${flowerItem!.img}`}
                  alt={flowerItem?.name}
                />
              </div>
            ))}
          </div>
          <MainImg imgMainPath={imgMainPath} loading={loading} />

          <div className="w-5/12 pl-6 border-l border-light border-solid">
            <Article />
            <Promotion />
            <Price />
            <Count />
            {flowerItem?.inStock && <QuickOrderPhone />}

            <Tabs />
          </div>
        </div>

        {!flowerItem?.togetherWith ? (
          <Chocolates />
        ) : (
          <WithChocolates item={flowerItem} />
        )}
      </div>

      <Reviews />
      <ReviewsModal />
    </section>
  )
}

export default SingleBouquet
