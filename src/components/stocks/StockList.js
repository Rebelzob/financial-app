import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import StockCard from './StockCard';

const StockList = () => {
  const stocks = useSelector((state) => state.stocks.stocks);
  const stockArray = Object.values(stocks);
  const searchQuery = useSelector((state) => state.stocks.searchQuery);

  const filteredStocks = stockArray.filter((stock) => {
    const companyName = stock.companyName.toLowerCase();
    const query = searchQuery.toLowerCase();
    return companyName.includes(query);
  }).sort((a, b) => {
    const aName = a.companyName.toLowerCase();
    const bName = b.companyName.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <Row xs={1} sm={1} md={3} lg={3} xl={3} className="g-4 no-gutters">
        {filteredStocks.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </Row>
    </Container>
  );
};

export default StockList;
