import ChocolatesItem from './components/ChocolatesItem'
import { chocolatesData } from './data'

const Chocolates = () => {
  return (
    <div className="text-dark my-20">
      <h4 className="flex items-center justify-center text-xl font-medium uppercase">
        <img className="mr-4" src="/images/icons/gift.svg" alt="gift" />

        <span className="relative mt-3 after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:-bottom-3 after:bg-gold">
          Buy together
        </span>
      </h4>
      <div className="flex justify-between mt-8">
        {chocolatesData?.map((item) => (
          <ChocolatesItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Chocolates
