import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background-color: #e6e2e1;
    color: #000;
    height: 200px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo className="jumbo">
      <Container>
        <h1>Welcome To </h1>
        <p>Cryptocurrency Market</p>
      </Container>
    </Jumbo>
  </Styles>
);
