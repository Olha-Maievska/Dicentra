import { shopsData } from '@/pages/Shops/data'

const ContactsInfo = () => {
  const kyivShop = shopsData[0]
  return (
    <div className="text-md mb-10">
      <img
        className="h-[300px] object-cover mb-10"
        src="/images/shops/kharkiv-shop.jpg"
        alt=""
      />
      <div className="w-8/12 mx-auto">
        <h5 className="text-2xl font-medium mb-3">How to find us</h5>
        <div className="border-b border-gold border-solid pb-7">
          <div>Address of our showroom: {kyivShop.address}</div>
          <div className="mt-2">
            Working hours from 8:00 to 22:00 seven days a week
          </div>
        </div>
        <div className="border-b border-gold border-solid py-7">
          <div className="flex items-center mb-6">
            <img className="mr-7" src="/images/icons/phone.svg" alt="phone" />
            <div>
              <div className="mb-2">{kyivShop.kyivstarPhone}</div>
              <div>{kyivShop.lifePhone}</div>
            </div>
          </div>
          <div className="flex items-center">
            <img className="mr-7" src="/images/icons/mail.svg" alt="mail" />
            <div>{kyivShop.email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsInfo
