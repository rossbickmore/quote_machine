import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  
  const [selected, setSelected] = useState(0)

  const randomNumber = () => Math.round(Math.random()*4)

  const quotes = [ 
    {"quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
    }
  ]
  
return (
  <div>
    <h1>{quotes[selected].quoteText}</h1>
    <p>{quotes[selected].quoteAuthor}</p>
    <button onClick={() => setSelected(randomNumber())}>New quote</button>
  </div>
    

)
  
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

