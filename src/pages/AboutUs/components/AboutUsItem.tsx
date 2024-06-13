import { FC } from 'react'

interface AboutUsItemProps {
  item: {
    title: string
    text: string
    imgPath?: string
  }
}

const AboutUsItem: FC<AboutUsItemProps> = ({ item }) => {
  return (
    <div className="text-center mb-12">
      <h4 className="text-2xl font-medium text-dark mb-4">{item.title}</h4>
      <p className="w-10/12 mx-auto text-dark mb-8">{item.text}</p>
      {item.imgPath && (
        <img
          className="w-full h-[300px] object-cover"
          src={`/images/about/${item.imgPath}`}
          alt={item.title}
        />
      )}
    </div>
  )
}

export default AboutUsItem
