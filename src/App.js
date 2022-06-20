import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [simpsons, setSimpsons] = useState([{

  }]
  )
  const citation = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(function(response) {
      return (response.data)
    })
    .catch(function (error){
      console.log(error)
    })
    .then(function (data) {
      setSimpsons(data[0])
    });
  }
  return (
    <div className='App'>
      <img src={simpsons.image} alt="Avatar" />
      <h1>{simpsons.character}</h1>
      <p>{simpsons.quote}</p>
      <button onClick={citation}>Click here!</button>
    </div>
  )
}

export default App;
