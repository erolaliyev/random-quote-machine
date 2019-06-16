import React from "react";

const TweetQuote = props => (
  <div>
    <a
      id="tweet-quote"
      title="Tweet this quote!"
      target="_blank"
      href={props.href}
    >
      <i className="fab fa-twitter" />
    </a>
  </div>
);

export default TweetQuote;
