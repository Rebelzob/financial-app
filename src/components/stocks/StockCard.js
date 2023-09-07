import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import './stockCard.css';

const StockCard = ({ stock }) => (
  <Col xs={6} sm={6} md={6} lg={6} xl={6} className="card-container">
    <Card className="mb-4 card-container">
      <Link to={`/details/${stock.symbol}`} className="stretched-link">
        <BsArrowRightCircle className="bsArrowRight" style={{ fontSize: '2rem' }} />
      </Link>
      <Link to={`/details/${stock.symbol}`} className="stretched-link" />
      <Card.Img variant="top" src={stock.image} />
      <Card.Body>
        <Card.Title>{stock.companyName}</Card.Title>
        <Card.Text>{stock.price}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

StockCard.propTypes = {
  stock: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockCard;
