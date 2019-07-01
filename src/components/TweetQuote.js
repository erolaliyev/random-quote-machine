import React from "react";
import styled from "styled-components";

const FontAwesome = styled.i`
  color: black;
  /* font-size: 2.5rem; */
`;

const TweetQuote = props => (
  <div>
    <a
      id="tweet-quote"
      title="Tweet this quote!"
      target="_blank"
      href={props.href}
    >
      <FontAwesome className="fab fa-twitter fa-lg" />
    </a>
  </div>
);

export default TweetQuote;
