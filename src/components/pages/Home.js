import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  Container,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import { fetchStocks } from '../../redux/stocks/stocksSlice';
import StockList from '../stocks/StockList';
import SearchBar from '../common/SearchBar';
import logo from '../../assets/images/stocksLogoImage.jpg';
import CompaniesCounter from '../common/CompaniesCounter';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={6} md={6}>
          <Image src={logo} fluid style={{ filter: 'blur(1px)' }} />
        </Col>
        <Col xs={6} md={6}>
          <CompaniesCounter />
        </Col>
      </Row>
      <SearchBar />
      <h2 className="mt-4 mb-2 home-title">Companies</h2>
      <StockList />
    </Container>
  );
};

export default Home;
