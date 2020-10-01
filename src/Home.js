import React, { useState } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

const DATA = [
  {
    name: "Bitcoin",
    pair: "BTC/USDT",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "Ethereum",
    pair: "BTC/USD",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "Stellar",
    pair: "BTC/USD",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "EOS",
    pair: "BTC/USDT",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "Chainlink",
    pair: "BTC/BNB",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "Monero",
    pair: "BTC/USD",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "Tron",
    pair: "BTC/USD",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  },
  {
    name: "Theta",
    pair: "BTC/USDT",
    symbol: "Bitcoin",
    market_cap: 12313.12,
    avarage_last_price: 200000
  }
];

const Styles = styled.div`
  .jumbo {
    background-color: #fff;
    color: #000;
    height: 800px;
    width: 800px;
  }
  .link {
    color: black;
    text-decoration: none;
    backgound-color: none;
  }
  .searchBox {
    align-items: right;
    margin-left: 500px;
  }
`;

const Home = () => {
  const [rows, setRows] = useState(DATA);

  const handleSearch = event => {
    const query = event.target.value.toLowerCase();

    const filteredData = DATA.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    setRows(filteredData);
  };

  return (
    <Styles>
      <div className="jumbo">
        <p>Our Market</p>

        <input onChange={handleSearch} />

        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pair</th>
              <th>Symbol</th>
              <th>Market Cup</th>
              <th>Avarage Last Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href="http://google.com" className="link">
                    {item.name}
                  </a>
                </td>
                <td>{item.pair}</td>
                <td>{item.symbol}</td>
                <td>{`$ ${item.market_cap}`}</td>
                <td>{`$ ${item.avarage_last_price}`}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Styles>
  );
};

export default Home;
