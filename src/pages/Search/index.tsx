import FlowersItem from '@/common/components/FlowersItem'
import { useAppSelector } from '@/hooks/hooks'
import Bestsellers from '../Home/components/Bestsellers'

const SelectedFlowers = () => {
  const { selectedFlowersByForm } = useAppSelector((state) => state.flowers)
  return (
    <div className="pt-48 pb-28 bg-light">
      <div className="container">
        <h2 className="text-center text-[40px] font-medium mb-12 mt-10">
          {!selectedFlowersByForm.length
            ? 'There are no results for the selected parameters'
            : 'Results for selected parameters'}
        </h2>
        {!selectedFlowersByForm.length ? (
          <Bestsellers />
        ) : (
          <div className="flex flex-wrap justify-center">
            {selectedFlowersByForm.map((item) => (
              <FlowersItem key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectedFlowers
