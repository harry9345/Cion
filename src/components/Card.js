import React from "react";
import Modal from "react-modal";

const Card = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Coin"
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3>Selected Coin</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default Card;
