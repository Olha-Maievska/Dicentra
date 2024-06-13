import { createSlice } from '@reduxjs/toolkit'
import {
  IFlowerItem,
  IFlowersData,
  IReviewItem,
} from '@/common/dto/getFlowersDto'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
  list: IFlowersData
  flowers: IFlowerItem[]
  flowerItem: IFlowerItem | null
  priceWithCount: number
  actionFlowersData: IFlowerItem[]
  togetherWithData: IFlowerItem[]
  selectedFlowersByForm: IFlowerItem[]
  isLoading: boolean
}

const initialState: IInitialState = {
  list: [],
  flowers: [],
  flowerItem: null,
  actionFlowersData: [],
  togetherWithData: [],
  selectedFlowersByForm: [],
  priceWithCount: 0,
  isLoading: false,
}

const flowersSlice = createSlice({
  name: '@@flowers',
  initialState,
  reducers: {
    getFlowers: (state, { payload }: PayloadAction<IFlowersData>) => {
      state.list = payload
      state.flowers = payload[0].flowers
    },
    setFlowers: (state, { payload }: PayloadAction<IFlowerItem[]>) => {
      state.flowers = payload
    },
    setFlowerItem: (state, { payload }: PayloadAction<IFlowerItem>) => {
      state.flowerItem = payload
    },
    setPriceWithCount: (state) => {
      if (state.flowerItem?.isAction && state.flowerItem?.actionPrice) {
        state.priceWithCount = state.flowerItem?.actionPrice
      } else {
        state.priceWithCount = state.flowerItem!.price
      }
    },
    addPriceWithCount: (state) => {
      if (state.flowerItem?.isAction && state.flowerItem?.actionPrice) {
        state.priceWithCount += state.flowerItem?.actionPrice
      } else {
        state.priceWithCount += state.flowerItem!.price
      }
    },
    setActionFlowers: (state) => {
      state.list.forEach((item) =>
        item?.flowers.forEach(
          (f) => f.isAction && state.actionFlowersData.push(f)
        )
      )
    },
    setTogetherWithFlowers: (state) => {
      state.list.forEach((item) =>
        item.flowers.forEach(
          (f) => f.togetherWith && state.togetherWithData.push(f)
        )
      )
    },
    setSelectedDataByForm: (
      state,
      { payload }: PayloadAction<IFlowerItem[]>
    ) => {
      state.selectedFlowersByForm = payload
    },
    minusPriceWithCount: (state) => {
      if (state.flowerItem?.isAction && state.flowerItem?.actionPrice) {
        state.priceWithCount -= state.flowerItem?.actionPrice
      } else {
        state.priceWithCount -= state.flowerItem!.price
      }
    },
    addReview: (state, { payload }: PayloadAction<IReviewItem>) => {
      state.flowerItem?.reviews?.push(payload)

      state.list.map((item) => {
        item.flowers.map((f) => {
          if (f.id === payload.flowerID) {
            f.reviews?.push(payload)
          } else return
        })
      })
    },
  },
})

export const {
  getFlowers,
  setFlowers,
  setFlowerItem,
  addPriceWithCount,
  minusPriceWithCount,
  setPriceWithCount,
  setTogetherWithFlowers,
  setActionFlowers,
  setSelectedDataByForm,
  addReview,
} = flowersSlice.actions

export const flowersReducer = flowersSlice.reducer
