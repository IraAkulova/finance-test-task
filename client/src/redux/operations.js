import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

export const fetchTickers = createAsyncThunk('tickers/fetchAll', async (_, thunkAPI) => {
    try {
        const socket = io.connect('http://localhost:4000');
        socket.on('ticker', (data) => {
        thunkAPI.dispatch(fetchTickers.fulfilled(data));
        return data;
        });
        socket.emit('start');
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});