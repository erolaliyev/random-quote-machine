import React from "react";
import NewQuote from "./NewQuote";
import TweetQuote from "./TweetQuote";
import styled, { createGlobalStyle } from "styled-components";
import "normalize.css";

const quotes = [
  `I hated every minute of training, but I said, "Don't quite. Suffer now and live the rest of your life as a champion."`,
  `Freedom is not worth having if it does not include the freedom to make mistakes.`,
  `A man is but the product of his thoughts. What he thinks he becomes.`,
  `Either write something worth reading or do something worth writing.`,
  `The weak can never forgive. Forgiveness is the attribute of the strong.`,
  `It is the mark of an educated mind to be able to entertain a thought without accepting it.`,
  `Chance favors the prepared mind.`,
  `What is in our power to do, it lies in our power not to do.`,
  `We are what we repeatedly do. Excellence, therefore, is not an act, but a habit.`,
  `Happiness is when what you think, what you say, and what you do are in harmony.`,
  `Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.`,
  `Anyone can cook but only the fearless can be great.`,
  `If you're going through hell, keep going.`,
  `Not everyone can become a great artist, but a great artist can come from anywhere.`,
  `First, they ignore you, then they laugh at you, then they fight you, then you win.`,
  `It always seems impossible until it's done.`,
  `I fear not the man who has practiced 10000 kicks once, but I fear the man who has practiced one kick 10000 times.`,
  `I am not the richest, smartest or most talented person in the world, but I succeed because I keep going and going and going.`,
  `Strength does not come from physical capacity. It comes from an indomitable will.`,
  `Everything should be made as simple as possible, but not simpler.`,
  `You can't climb the ladder of success with your hands in your pockets.`
];
const authors = [
  `Muhammad Ali`,
  `Mahatma Gandhi`,
  `Mahatma Gandhi`,
  `Benjamin Franklin`,
  `Mahatma Gandhi`,
  `Aristotle`,
  `Louis Pasteur`,
  `Aristotle`,
  `Aristotle`,
  `Mahatma Gandhi`,
  `Albert Einstein`,
  `Auguste Gusteau`,
  `Winston Churchill`,
  `Anton Ego`,
  `Mahatma Gandhi`,
  `Nelson Mandela`,
  `Bruce Lee`,
  `Sylvester Stallone`,
  `Mahatma Gandhi`,
  `Albert Einstein`,
  `Arnold Schwarzenegger`
];
const backgroundColors = [
  "linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)",
  "linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)",
  "linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)",
  "linear-gradient( 135deg, #F97794 10%, #623AA2 100%)",
  "linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)",
  "linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)",
  "linear-gradient( 135deg, #FFD26F 10%, #3677FF 100%)",
  "linear-gradient( 135deg, #FFDB01 10%, #0E197D 100%)",
  "linear-gradient( 135deg, #EECE13 10%, #B210FF 100%)",
  "linear-gradient( 135deg, #FDD819 10%, #E80505 100%)",
  "linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%)",
  "linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)",
  "linear-gradient( 135deg, #F0FF00 10%, #58CFFB 100%)",
  "linear-gradient( 135deg, #FD6E6A 10%, #FFC600 100%)",
  "linear-gradient( 135deg, #F6D242 10%, #FF52E5 100%)",
  "linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%)",
  "linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%)",
  "linear-gradient( 135deg, #FFA8A8 10%, #FCFF00 100%)",
  "linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)"
];

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    /* align-items: center; */
    padding: 0;
    margin: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    width: 100%;
    box-sizing: border-box;
    /* border: 3px solid red; */
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  button:focus {
    outline: none;
  }
`;

const AppWrapper = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 10rem auto 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

const Quote = styled.p`
  /* border: 1px orange dashed; */
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

const Author = styled.p`
  text-align: right;
  width: 60%;
  font-style: italic;
  padding: 0;
  margin: 3% auto;

  @media (max-width: 425px) {
    width: 85%;
    margin: 7% auto;
  }

  @media (max-width: 375px) {
    margin: 10% auto;
  }
`;

const ButtonBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRandomNumber: Math.floor(Math.random() * quotes.length),
      secondRandomNumber: Math.floor(Math.random() * backgroundColors.length)
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    const newFirstRandomNumber = Math.floor(Math.random() * quotes.length);
    const newSecondRandomNumber = Math.floor(
      Math.random() * backgroundColors.length
    );
    if (
      newFirstRandomNumber !== this.state.firstRandomNumber &&
      newSecondRandomNumber !== this.state.secondRandomNumber
    ) {
      this.setState({
        firstRandomNumber: newFirstRandomNumber,
        secondRandomNumber: newSecondRandomNumber
      });
    } else {
      this.handleNewQuote();
    }
  }

  render() {
    document.querySelector("body").style.background =
      backgroundColors[this.state.secondRandomNumber];
    return (
      <AppWrapper id="quote-box">
        <GlobalStyle />
        <Quote id="text">{quotes[this.state.firstRandomNumber]}</Quote>
        <Author id="author">{authors[this.state.firstRandomNumber]}</Author>
        <ButtonBox>
          <TweetQuote
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${
              quotes[this.state.firstRandomNumber]
            } ${
              authors[this.state.firstRandomNumber]
            } %23randomquotemachine %23freeCodeCamp`}
          />
          <NewQuote id="new-quote" handleNewQuote={this.handleNewQuote} />
        </ButtonBox>
      </AppWrapper>
    );
  }
}
