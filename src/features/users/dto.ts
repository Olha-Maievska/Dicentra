import { IFlowerItem, IReviewItem } from '@/common/dto/getFlowersDto'
import { IUser, IUserAddress } from '@/common/dto/getUsersDto'

export type Status = 'success' | 'error' | 'idle'

export type LoginUser = Pick<IUser, 'phone' | 'password'>
export type ChangeUser = Pick<IUser, 'phone' | 'name' | 'email' | 'id'>
export type Review = Omit<IReviewItem, 'name' | 'flowerID'>

export interface UserReview extends Review {
  flowerItem: IFlowerItem
}

export interface IUserAddressWithID extends IUserAddress {
  id: string
}

export interface IPasswords {
  id: string
  password: string
  newPassword: string
  confirmPassword: string
}

export interface IInitialState {
  users: IUser[]
  currentUser: IUser | null
  passwordMessage: string
  registrationError: string
  registrationStatus: Status
}
