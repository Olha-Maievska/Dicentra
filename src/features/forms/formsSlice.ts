import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductWithCount } from '../cart/cartSlice'

interface IBackCallInfo {
  name: string
  phoneNumber: string
  createdAt: string
}

interface IQuickOrder {
  id: string,
  phone: string,
  numberOfOrder: number,
  products: Array<ProductWithCount>
}
 
interface IContactsFormData {
  id: string
  fullName: string,
  phone: string,
  email?: string,
  comment: string,
}

interface IOrderByPhoto {
  id: string
  name: string
  phoneNumber: string
  photo: File
}

export interface IInitialState {
  emailNews: string
  backCallInfo: null | IBackCallInfo
  quickOrder: IQuickOrder | null
  contactsForm: IContactsFormData | null
  orderByPhoto: IOrderByPhoto | null
}

const formsSlice = createSlice({
  name: '@@forms',
  initialState: {
    emailNews: '',
    backCallInfo: null,
    quickOrder: null,
    contactsForm: null,
    orderByPhoto: null,
  } as IInitialState,
  reducers: {
    getNews: (state, {payload}: PayloadAction<string>) => {
      state.emailNews = payload
    },
    getBackCall: (state, {payload}: PayloadAction<IBackCallInfo>) => {
      state.backCallInfo = payload
    },
    setQuickOrder: (state, {payload}: PayloadAction<IQuickOrder>) => {
      state.quickOrder = payload
    },
    setContactsForm: (state, {payload}: PayloadAction<IContactsFormData>) => {
      state.contactsForm = payload
    },
    setOrderByPhoto: (state, {payload}: PayloadAction<IOrderByPhoto>) => {
      state.orderByPhoto = payload
    },
  },
})

export const { getNews, getBackCall,setQuickOrder,setContactsForm, setOrderByPhoto } = formsSlice.actions

export const formsReducer = formsSlice.reducer
