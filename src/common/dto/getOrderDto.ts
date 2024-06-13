export interface INotesData {
  id: string
  imgPath: string
  name: string
  price: number
}

export interface IUserData {
  id: string
  fullName: string
  phone: string
  email: string
}

export interface RecipientData {
  name: string
  phone: string
}

export interface IUserDelivery {
  method: 'byCourier' | 'inStore'
  city?: string
  storeIn?: string
  street?: string
  number?: string
  wishes?: string
  date?: string
  hours?: string
  recipient?: string
  recipientData?: RecipientData
}

export interface IOrderUser {
  data: IUserData
  delivery: IUserDelivery
  noteMessage: string
  payment: 'cash' | 'byCard'
}
