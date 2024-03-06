import { configureStore } from '@reduxjs/toolkit';
import tickersReduser from './tickersSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersReduser,
  }
})