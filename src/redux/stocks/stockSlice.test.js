import stocksReducer, { fetchStocks } from './stocksSlice';

describe('stocksSlice reducer', () => {
  const initialState = {
    stocks: [],
    searchQuery: '',
    status: 'idle',
    error: null,
  };

  it('should update status on fetchStocks.pending', () => {
    const action = fetchStocks.pending;

    const newState = stocksReducer(initialState, action);

    expect(newState.status).toBe('loading');
  });

  it('should update status and stocks on fetchStocks.fulfilled', () => {
    const stocksData = [
      { symbol: 'AAPL', companyName: 'Apple Inc.' },
      { symbol: 'MSFT', companyName: 'Microsoft Corporation' },
      { symbol: 'AMZN', companyName: 'Amazon.com Inc.' },
    ];

    const action = {
      type: fetchStocks.fulfilled.type,
      payload: stocksData,
    };

    const newState = stocksReducer(initialState, action);

    expect(newState.status).toBe('succeeded');
    expect(newState.stocks).toEqual(stocksData);
  });

  it('should update status and error on fetchStocks.rejected', () => {
    const errorMessage = 'API error';

    const action = {
      type: fetchStocks.rejected.type,
      payload: { error: errorMessage },
    };

    const newState = stocksReducer(initialState, action);

    expect(newState.status).toBe('failed');
    expect(newState.error).toBe(errorMessage);
  });
});
