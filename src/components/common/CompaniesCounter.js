import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './companiesCounter.css';

const CompaniesCounter = () => {
  const stocks = useSelector((state) => state.stocks.stocks);
  const count = Object.keys(stocks).length;

  return (
    <Row className="mt-3 counter-container">
      <Col className="d-flex justify-content-between">
        <h1>{`Stocks ${count}`}</h1>
      </Col>
    </Row>
  );
};

export default CompaniesCounter;
