import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { ModalOpenedReducer } from './modalOpenedSlice';
import { calculatorReducer } from './calculator/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { loadingReducer } from './loader/slice';
import { productsReducer } from './dropdown/slice';
import { diaryReducer } from './diary/slice';
import { addProductModalReducer } from './ModalAddProductOpened/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    modalopened: ModalOpenedReducer,
    calculator: calculatorReducer,
    loading: loadingReducer,
    products: productsReducer,
    diary: diaryReducer,
    addproductmodalopened: addProductModalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
