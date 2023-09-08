import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import companiesNames from '../../components/utils/companiesNames.json';
import companyParsedData from '../../components/utils/companyParsedData';

const apiKey = '5afadad5ca87a4ecc6b389192ea3f3c4';
const stocksUrl = `https://financialmodelingprep.com/api/v3/profile/${companiesNames.symbols.toString()}?apikey=${apiKey}`;

export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async (thunkAPI) => {
    const cachedStocks = localStorage.getItem('stocks');
    if (cachedStocks) {
      return JSON.parse(cachedStocks);
    }
    try {
      const response = await axios.get(stocksUrl);
      const parsedStock = response.data.map((stock) => companyParsedData(stock));
      localStorage.setItem('stocks', JSON.stringify(parsedStock));
      return parsedStock;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    searchQuery: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchStocks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.stocks = action.payload;
    });
    builder.addCase(fetchStocks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload.error;
    });
  },
});

export const { setSearchQuery } = stocksSlice.actions;
export default stocksSlice.reducer;
