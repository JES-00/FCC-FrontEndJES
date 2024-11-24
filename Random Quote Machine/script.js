import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteArray = [
  { quote: "The only thing we have to fear is fear itself.",
    author: "― Franklin D. Roosevelt", 
  },
  { quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "― Henry David Thoreau"
  },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "― Ralph Waldo Emerson"
  },
  { quote: "Never let the fear of striking out keep you from playing the game.",
    author: "― Babe Ruth"
  },
  { quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "― Dr. Seuss"
  },
  { quote: "Life is trying things to see if they work.",
    author: "― Ray Bradbury"
  },
  { quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "― Eleanor Roosevelt"
  },
  { quote: "Always remember, your focus determines your reality.",
    author: "― George Lucas"
  },
  { quote: "If you really look closely, most overnight successes took a long time.",
    author: "― Steve Jobs"
  },
  { quote: "Try not to become a man of success. Rather become a man of value.",
    author:"― Albert Einstein"
  }
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.quote}</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button
        id="new-quote"
        class="button"
        title="Generate a new quote!"
        onClick={ random_bg_color, handleNewQuote}
        >
        New Quote
      </button>
            <a
        class="button"
        id="tweet-quote"
        title="Send Tweet!"
        target="_top"
               href="twitter.com/intent/tweet"
      >
        <i class="fa fa-twitter"> Tweet</i>
      </a>
    </div>
   </div>

);

const getRandomIndex = (max) => 
  Math.round(Math.random() * ((quoteArray.length-1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteArray[getRandomIndex()])
  
  const handleNewQuote = () => {
    setQuote(quoteArray[getRandomIndex()])
  }
  
  return (
    <div class="main">
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  )
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }

random_bg_color();
ReactDOM.render(<App />, document.querySelector("#app"));
