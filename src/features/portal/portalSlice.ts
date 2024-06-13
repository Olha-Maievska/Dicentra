import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBlogItem } from '@/common/dto/getBlogDto'

export interface IInitialState {
  article: IBlogItem
}

const portalSlice = createSlice({
  name: '@@portal',
  initialState: {
    article: {},
  } as IInitialState,
  reducers: {
    setArticle: (state, { payload }: PayloadAction<IBlogItem>) => {
      state.article = payload
    },
  },
})

export const { setArticle } = portalSlice.actions

export const portalReducer = portalSlice.reducer
