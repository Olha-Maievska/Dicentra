import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
import { persistReducer } from 'redux-persist'
import { flowersReducer } from './flowers/flowersSlice'
import { portalReducer } from './portal/portalSlice'
import { modalReducer } from './modal/modalSlice'
import { cartReducer } from './cart/cartSlice'
import { usersReducer } from './users/usersSlice'
import { orderReducer } from './order/orderSlice'
import { formsReducer } from './forms/formsSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['portal', 'cart', 'modal', 'users', 'order', 'flowers'],
}

const rootReducer = combineReducers({
  flowers: flowersReducer,
  portal: portalReducer,
  modal: modalReducer,
  cart: cartReducer,
  users: usersReducer,
  order: orderReducer,
  forms: formsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
