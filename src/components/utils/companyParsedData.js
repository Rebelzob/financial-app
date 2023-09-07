const companyParsedData = (stock) => ({
  symbol: stock.symbol,
  price: `USD ${stock.price}`,
  beta: stock.beta,
  volAvg: stock.volAvg,
  mktCap: stock.mktCap,
  lastDiv: stock.lastDiv,
  range: stock.range,
  changes: stock.changes,
  companyName: stock.companyName,
  sector: stock.sector,
  website: stock.website,
  image: stock.image,
  description: stock.description,
  ceo: stock.ceo,
  exchange: stock.exchange,
  industry: stock.industry,
});

export default companyParsedData;
