import companyParsedData from './companyParsedData';

describe('companyParsedData', () => {
  it('returns an object with the expected properties', () => {
    const stock = {
      symbol: 'AMZN',
      price: 137.85,
      beta: 1.255975,
      volAvg: 53713808,
      mktCap: 1414396157645,
      lastDiv: 0.2,
      range: '81.43-143.63',
      changes: 2.49,
      companyName: 'Amazon.com, Inc.',
      currency: 'USD',
      cik: '0001018724',
      isin: 'US0231351067',
      cusip: '023135106',
      exchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      industry: 'Internet Retail',
      website: 'https://www.amazon.com',
      description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores in North America and internationally. The company operates through three segments: North America, International, and Amazon Web Services (AWS). Its products offered through its stores include merchandise and content purchased for resale; and products offered by third-party sellers The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs, Rings, Blink, eero, and Echo; and develops and produces media content. In addition, it offers programs that enable sellers to sell their products in its stores; and programs that allow authors, musicians, filmmakers, Twitch streamers, skill and app developers, and others to publish and sell content. Further, the company provides compute, storage, database, analytics, machine learning, and other services, as well as fulfillment, advertising, and digital content subscriptions. Additionally, it offers Amazon Prime, a membership program. The company serves consumers, sellers, developers, enterprises, content creators, and advertisers. Amazon.com, Inc. was incorporated in 1994 and is headquartered in Seattle, Washington.',
      ceo: 'Mr. Andrew R. Jassy',
      sector: 'Consumer Cyclical',
      country: 'US',
      fullTimeEmployees: '1541000',
      phone: '206 266 1000',
      address: '410 Terry Avenue North',
      city: 'Seattle',
      state: 'WA',
      zip: '98109-5210',
      dcfDiff: 61.2396,
      dcf: 163.48,
      image: 'https://financialmodelingprep.com/image-stock/AMZN.png',
      ipoDate: '1997-05-15',
      defaultImage: false,
      isEtf: false,
      isActivelyTrading: true,
      isAdr: false,
      isFund: false,
    };

    const expected = {
      symbol: 'AMZN',
      price: 'USD 137.85',
      beta: 1.255975,
      volAvg: 53713808,
      mktCap: 1414396157645,
      lastDiv: 0.2,
      range: '81.43-143.63',
      changes: 2.49,
      companyName: 'Amazon.com, Inc.',
      sector: 'Consumer Cyclical',
      website: 'https://www.amazon.com',
      image: 'https://financialmodelingprep.com/image-stock/AMZN.png',
      description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores in North America and internationally. The company operates through three segments: North America, International, and Amazon Web Services (AWS). Its products offered through its stores include merchandise and content purchased for resale; and products offered by third-party sellers The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs, Rings, Blink, eero, and Echo; and develops and produces media content. In addition, it offers programs that enable sellers to sell their products in its stores; and programs that allow authors, musicians, filmmakers, Twitch streamers, skill and app developers, and others to publish and sell content. Further, the company provides compute, storage, database, analytics, machine learning, and other services, as well as fulfillment, advertising, and digital content subscriptions. Additionally, it offers Amazon Prime, a membership program. The company serves consumers, sellers, developers, enterprises, content creators, and advertisers. Amazon.com, Inc. was incorporated in 1994 and is headquartered in Seattle, Washington.',
      ceo: 'Mr. Andrew R. Jassy',
      exchange: 'NASDAQ Global Select',
      industry: 'Internet Retail',
    };

    expect(companyParsedData(stock)).toEqual(expected);
  });
});
