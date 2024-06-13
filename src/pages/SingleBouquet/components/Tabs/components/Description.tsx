import { useAppSelector } from '@/hooks/hooks'

const Description = () => {
  const { flowerItem } = useAppSelector((state) => state.flowers)

  return <p>{flowerItem?.description}</p>
}

export default Description
