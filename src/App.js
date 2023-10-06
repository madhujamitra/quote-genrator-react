import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';





function App() {
  const [quote, setQuote] = useState("hello");
  const [author, setAuthor] = useState("world");
  //https://api.quotable.io/random

  useEffect(() => {

    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        ((quote) => {
          setAuthor(quote.author);
          setQuote(quote.content);
          console.log(quote);
        })
      )
  }, [])

  let fetchNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        ((quote) => {
          setAuthor(quote.author);
          setQuote(quote.content);
          console.log(quote);
        })
      )

  }

  return (
    <div className="App" id="quote-box">
      <div className='quote' >
        <h2 id="text">{quote}</h2>
        <small id="author"> - {author}</small>
        <br></br>
        {/* <a id="tweet-quote" className='icon'onClick={fetchNewQuote} ><FontAwesomeIcon icon={faTwitter} size="sm" /></a> */}
        <a
          id="tweet-quote"
          className='icon'
          href={`https://twitter.com/intent/tweet?text=${`"${quote}" - ${author}`}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <br></br>
      <button className='btn' onClick={fetchNewQuote} id="new-quote">genrate new quotes</button>

    </div>
  );
}

export default App;