import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: black;
  border: none;
  background: transparent;
  font-size: 2.2rem;
  cursor: pointer;
`;

const NewQuote = props => (
  <div>
    <Button id="new-quote" onClick={props.handleNewQuote}>
      New quote
    </Button>
  </div>
);

export default NewQuote;
