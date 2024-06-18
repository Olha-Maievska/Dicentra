import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFlowerItem, ITogetherWith } from '@/common/dto/getFlowersDto'

export type Product = IFlowerItem | ITogetherWith

export interface ProductWithCount {
  id: string
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
        (el) => el.id === payload.id && !payload.withTogether
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
          id: payload.id,
          product: payload,
          count: 1,
          price: payload.price,
          priceWithCount: payload.price,
        })
    },
    deleteFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter((el) => el.id !== payload)
    },
    setProductCountToUp: (state, { payload }: PayloadAction<string>) => {
      state.cart.map((el) => {
        if (el.id === payload) {
          el.count += 1
          el.priceWithCount += el.price
        } else return state
      })
    },
    setProductCountToDown: (state, { payload }: PayloadAction<string>) => {
      state.cart.map((el) => {
        if (el.id === payload) {
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
