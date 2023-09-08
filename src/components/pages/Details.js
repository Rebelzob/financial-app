import {
  Card,
  Container,
  Accordion,
  ListGroup,
  Image,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './details.css';

const Details = () => {
  const { id } = useParams();
  const stocks = useSelector((state) => state.stocks.stocks.find((s) => s.symbol === id));

  if (!stocks) {
    return <div>Stock not found</div>;
  }

  const {
    symbol,
    companyName,
    price,
    mktCap,
    lastDiv,
    volAvg,
    range,
    beta,
    ceo,
    description,
    website,
    industry,
    image,
  } = stocks;

  return (
    <Container className="text-center">
      <Image className="image-display-top" src={image} fluid />
      <h1>{companyName}</h1>
      <p>{price}</p>
      <Card>
        <Card.Header>
          Metrics
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="list-group-item-even">
            <div className="label">Symbol:</div>
            <div className="value">{symbol}</div>
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-odd">
            <div className="label">Market Cap:</div>
            <div className="value">{mktCap}</div>
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-even">
            <div className="label">Dividend Yield:</div>
            <div className="value">{lastDiv}</div>
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-odd">
            <div className="label">Volume Average:</div>
            <div className="value">{volAvg}</div>
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-even">
            <div className="label">Range:</div>
            <div className="value">{range}</div>
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-odd">
            <div className="label">Beta:</div>
            <div className="value">{beta}</div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Header>
          Information
        </Card.Header>
        <Accordion defaultActiveKey="ceo" flush>
          <Accordion.Item eventKey="0" key="ceo">
            <Accordion.Header className="accordeon-header-even">
              CEO
            </Accordion.Header>
            <Accordion.Body>
              {ceo}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" key="description">
            <Accordion.Header className="bg-primary text-white">
              Description
            </Accordion.Header>
            <Accordion.Body>
              {description}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" key="website">
            <Accordion.Header className="accordeon-header-even">
              Website
            </Accordion.Header>
            <Accordion.Body>
              <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" key="industry">
            <Accordion.Header className="accordeon-header-odd">
              Industry
            </Accordion.Header>
            <Accordion.Body>
              {industry}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Container>
  );
};

export default Details;
