# Random Quote Machine

![Random Quote Machine](https://github.com/erolaliyev/random-quote-machine/blob/master/dist/images/random%20quote%20machine.png)

- User stories:

  - I can see a wrapper element with a corresponding `id="quote-box"`.
  - Within `#quote-box`, I can see an element with a corresponding `id="text"`.
  - Within `#quote-box`, I can see an element with a corresponding `id="author"`.
  - Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.
  - Within `#quote-box`, I can see a clickable element with a corresponding `id="tweet-quote"`.
  - On first load, my quote machine displays a random quote in the element with `id="text"`.
  - On first load, my quote machine displays the random quote's author in the element with `id="author"`.
  - When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.
  - My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.
  - I can tweet the current quote by clicking on the `#tweet-quote` `a` element. This `a` element should include the `"twitter.com/intent/tweet"` path in it's `href` attribute to tweet the current quote.
  - The `#quote-box` wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

- Stack:

  - React
  - styled-components
  - webpack

- [Live preview](https://erol-fcc-random-quote-machine.surge.sh/)
