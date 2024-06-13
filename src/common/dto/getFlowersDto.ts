export interface IReviewItem {
  userID: string
  flowerID: string
  rating: number
  name: string
  comment: string
  createdAt: string
}

interface IFlowerChar {
  height: number
  width: number
  color: string[]
  compound: string[]
  events: string[]
}

export interface ITogetherWith {
  id: string
  name: string
  article: number
  price: number
  actionPrice: number
  img: string
}

export interface IFlowerItem {
  id: string
  article: number
  name: string
  img: string
  price: number
  inStock?: boolean
  IsBestsellers?: boolean | undefined
  isAction?: boolean | undefined
  actionPrice?: number | undefined
  characteristic?: IFlowerChar
  reviews?: IReviewItem[] | undefined
  togetherWith?: ITogetherWith
  description?: string
}

export interface IFlowerKind {
  id: number
  title: string
  bestsellers?: boolean | undefined
  flowers: IFlowerItem[]
}

export type IFlowersData = IFlowerKind[]
