import { INotesData, IUserData, IUserDelivery } from '@/common/dto/getOrderDto'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICardData {
  cardIndex: number
  cardOffset: number
}

interface IPaymentData {
  cardNumber: string
  cardExpiration: string
  cardCvv: string
  cardOwner: string
}

export interface IInitialState {
  data: IUserData | null
  delivery: IUserDelivery | null
  noteMessage: string
  activeCardData: ICardData | null
  payment: string
  paymentData: IPaymentData | null
  orderNumber: number
  paymentStatus: 'paid' | 'cash' | ''
  card: INotesData | null
}

const initialState: IInitialState = {
  data: null,
  delivery: null,
  noteMessage: '',
  activeCardData: null,
  payment: '',
  paymentData: null,
  orderNumber: 0,
  paymentStatus: '',
  card: null,
}

const orderSlice = createSlice({
  name: '@@order',
  initialState: initialState,
  reducers: {
    addData: (state, { payload }: PayloadAction<IUserData>) => {
      state.data = payload
    },
    addDelivery: (state, { payload }: PayloadAction<IUserDelivery>) => {
      state.delivery = payload
    },
    setNoteMessage: (state, { payload }: PayloadAction<string>) => {
      state.noteMessage = payload
    },
    setActiveCardData: (state, { payload }: PayloadAction<ICardData>) => {
      state.activeCardData = payload
    },
    setPayment: (state, { payload }: PayloadAction<string>) => {
      state.payment = payload
    },
    setPaymentData: (state, { payload }: PayloadAction<IPaymentData>) => {
      state.paymentData = payload
    },
    setOrderNumber: (state, { payload }: PayloadAction<number>) => {
      state.orderNumber = payload
    },
    setPaymentStatus: (state, { payload }: PayloadAction<'paid' | 'cash'>) => {
      state.paymentStatus = payload
    },
    setCart: (state, { payload }: PayloadAction<INotesData>) => {
      state.card = payload
    },
    resetOrder: (state) => {
      Object.assign(state, initialState)
    },
  },
})

export const {
  addData,
  addDelivery,
  setNoteMessage,
  setActiveCardData,
  setPayment,
  setPaymentData,
  setPaymentStatus,
  resetOrder,
  setOrderNumber,
  setCart,
} = orderSlice.actions

export const orderReducer = orderSlice.reducer
