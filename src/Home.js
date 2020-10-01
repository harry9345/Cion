import React from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Card from "./components/Card";

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: undefined,
    };
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  render() {
    return (
      <Styles>
        <div className="jumbo">
          <p>Our Market</p>
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
              <tr>
                <td>
                  <Card
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                  />
                </td>
                <td>BTC/USDT</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    Ethereum
                  </a>
                </td>
                <td>BTC/USD</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    Stellar
                  </a>
                </td>
                <td>BTC/USD</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    EOS
                  </a>
                </td>
                <td>BTC/USDT</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    Chainlink
                  </a>
                </td>
                <td>BTC/BNB</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    Monero
                  </a>
                </td>
                <td>BTC/USD</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    Tron
                  </a>
                </td>
                <td>BTC/USD</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
              <tr>
                <td>
                  <a href={"https://www.facebook.com/"} className="link">
                    Theta
                  </a>
                </td>
                <td>BTC/USDT</td>
                <td>Bitcoin</td>
                <td>$ 172.722.342</td>
                <td>$ 8722727.5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Styles>
    );
  }
}

export default Home;
