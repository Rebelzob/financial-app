import { configureStore } from '@reduxjs/toolkit';
import stocksSlice from './stocks/stocksSlice';

const store = configureStore({
  reducer: {
    stocks: stocksSlice,
  },
});

export default store;
