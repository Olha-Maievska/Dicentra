export interface IBlogText {
  subtitle: string
  paragraph: string
}

export interface IBlogItem {
  id: string
  title: string
  describing: string
  imgPath: string
  date: string
  text: IBlogText[]
}

export type IBlogData = IBlogItem[]
