import './App.css';
import React, {useState} from 'react';
import quotes from "./quotes"
import gradient from "./colors"
function App() {
  const [Quote, setQuote] = useState("Hey, Welcome Click below to generate a Quote")
  const [author, setauthor] = useState('nani')
  const [random, setrandom] = useState(0)
  const [color, setColor] = useState("#9FA0A8", "#5C7852")
  const randomgenerate= ()=>{
    let rint = Math.floor(100*Math.random())
    setrandom(rint)
    setQuote(quotes[rint].quote)
    setColor(gradient[rint].colors)
    setauthor(quotes[rint].author)
  }
  // const changeButton = () =>{
  //   setauthor('erpuk');
  //   setQuote('dengei');
  // }
  return (
    <div className="App">
      <header className="App-header" style={{background: `radial-gradient(${color[1]},${color[0]})`,color:color[0]}}>
        <div id="quote-box">
          
          <h1 id="text">"{Quote}"</h1>
          <p id="author">-{author}</p>
          <a href={encodeURI(`http://www.twitter.com/intent/tweet?text=${Quote}`)}id="tweet-quote"> <i style={{color:color[0]}} class="fa fa-twitter"></i></a>
          <button id="new-quote" onClick={()=>randomgenerate()} style={{backgroundColor:color[1]}}>Generate</button>
          <p  id="din"style={{color:color[0]}}><a href="https://www.linkedin.com/in/lakshmi-narayana-malineni-9815451ba">by <u >Nani</u></a></p>
        </div>

        
      </header>
    </div>
  );
}

export default App;