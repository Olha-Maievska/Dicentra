const OrderByPhotoContent = () => {
  return (
    <div className="w-96">
      <p className="text-2xl font-light mb-16">
        Our florists will create a composition based on your photo in just 2
        steps:
      </p>

      <div className="flex mb-12">
        <div className="w-20 h-20 rounded-full bg-white text-gold text-3xl flex items-center justify-center mr-7">
          1
        </div>
        <p className="text-xl font-light w-64">
          Fill out the form on the left and send us a request for the cost of
          the bouquet.
        </p>
      </div>

      <div className="flex">
        <div className="w-20 h-20 rounded-full bg-white text-gold text-3xl flex items-center justify-center mr-7">
          2
        </div>
        <p className="text-xl font-light w-64">
          A manager will contact you shortly to clarify details.
        </p>
      </div>
    </div>
  )
}

export default OrderByPhotoContent
