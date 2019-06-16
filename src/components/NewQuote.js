import React from "react";

const NewQuote = props => (
  <div>
    <button id="new-quote" onClick={props.handleNewQuote}>
      New quote
    </button>
  </div>
);

export default NewQuote;
