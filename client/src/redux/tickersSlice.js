import { createSlice } from '@reduxjs/toolkit';
import {fetchTickers} from './operations';

const initialState = {
  tickers: [],
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickers.fulfilled, (state, action) => {
        state.tickers = action.payload;
    });
  },
});

export const { setTickers } = tickersSlice.actions;
export default tickersSlice.reducer;
