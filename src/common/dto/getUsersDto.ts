import { IFlowerItem } from './getFlowersDto'

export interface IUserAddress {
  city: string
  street: string
  number: string
}

export interface IUserReviews {
  userID: string
  flowerItem: IFlowerItem
  rating: number
  comment: string
  createdAt: string
}

export interface IUser {
  id: string
  name: string
  phone: string
  email: string
  password: string
  confirmPassword: string
  createdAt: Date
  address?: IUserAddress | undefined
  reviews?: IUserReviews[] | undefined
}
