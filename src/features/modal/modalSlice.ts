import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  reviewsModal: boolean
  loginModal: boolean
  registrationModal: boolean
  paymentModal: boolean
  successModal: boolean
  backCall: boolean
}

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    reviewsModal: false,
    loginModal: false,
    registrationModal: false,
    paymentModal: false,
    backCall: false,
    successModal: false,
  } as IInitialState,
  reducers: {
    setReviewsModal: (state, { payload }: PayloadAction<boolean>) => {
      state.reviewsModal = payload
    },
    setLoginModal: (state, { payload }: PayloadAction<boolean>) => {
      state.loginModal = payload
    },
    setRegistrationModal: (state, { payload }: PayloadAction<boolean>) => {
      state.registrationModal = payload
    },
    setPaymentModal: (state, { payload }: PayloadAction<boolean>) => {
      state.paymentModal = payload
      state.successModal = false
    },
    setSuccessModal: (state, { payload }: PayloadAction<boolean>) => {
      state.successModal = payload
    },
    setBackCallModal: (state, { payload }: PayloadAction<boolean>) => {
      state.backCall = payload
    },
    resetAllModal: (state) => {
      state.loginModal = false
      state.registrationModal = false
      state.reviewsModal = false
    },
  },
})

export const {
  setReviewsModal,
  setLoginModal,
  setRegistrationModal,
  resetAllModal,
  setPaymentModal,
  setSuccessModal,
  setBackCallModal,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
