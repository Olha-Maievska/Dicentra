import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFlowerItem, ITogetherWith } from '@/common/dto/getFlowersDto'

export type Product = IFlowerItem | ITogetherWith

interface IDeleteData {
  id: string
  withTogether: boolean | undefined
}

export interface ProductWithCount {
  product: Product
  count: number
  withTogether?: boolean
  price: number
  priceWithCount: number
}

interface IInitialState {
  cart: Array<ProductWithCount>
  totalPrice: number
}

const cartSlice = createSlice({
  name: '@@cart',
  initialState: {
    cart: [],
    totalPrice: 0,
  } as IInitialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<ProductWithCount>) => {
      const found = state.cart.find(
        (el) => el.product.id === payload.product.id && !payload.withTogether
      )

      if (found) {
        return state
      } else state.cart.push(payload)
    },
    addChocolateToCart: (state, { payload }: PayloadAction<ITogetherWith>) => {
      const found = state.cart.find((el) => el.product.id === payload.id)

      if (found) {
        return state
      } else
        state.cart.push({
          product: payload,
          count: 1,
          price: payload.price,
          priceWithCount: payload.price,
        })
    },
    deleteFromCart: (state, { payload }: PayloadAction<IDeleteData>) => {
      state.cart = state.cart.filter(
        (el) =>
          el.withTogether != payload.withTogether ||
          el.product.id !== payload.id
      )
    },
    setProductCountToUp: (state, { payload }: PayloadAction<IDeleteData>) => {
      state.cart.map((el) => {
        if (
          el.withTogether == payload.withTogether &&
          el.product.id === payload.id
        ) {
          el.count += 1
          el.priceWithCount += el.price
        } else return state
      })
    },
    setProductCountToDown: (state, { payload }: PayloadAction<IDeleteData>) => {
      state.cart.map((el) => {
        if (
          el.withTogether == payload.withTogether &&
          el.product.id === payload.id
        ) {
          el.count -= 1
          el.priceWithCount -= el.price
        } else return state
      })
    },
    setTotalPrice: (state, { payload }: PayloadAction<number>) => {
      state.totalPrice = payload
    },
    resetCart: (state) => {
      state.cart = []
      state.totalPrice = 0
    },
  },
})

export const {
  addItemToCart,
  addChocolateToCart,
  deleteFromCart,
  setProductCountToUp,
  setProductCountToDown,
  setTotalPrice,
  resetCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
