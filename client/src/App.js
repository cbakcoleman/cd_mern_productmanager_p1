import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  // data coming from request
  const [data, setData] = useState([]);

  useEffect( () => {
    // make axios.get request to our server route
    axios.get("http://localhost:8000/api/products")
    // axios.get request returns json wrapped in data object so can not use 'res' must use 'res.data'
      .then(res => {
        console.log(res.data.products)
        setData(res.data.products)
      })
      .catch(err => console.log(err))
  }, [])

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div className="App">
      <h1>Data from Server [all products]</h1>
      {JSON.stringify(data)}
      <hr/>

      <form onSubmit={formSubmit}>
        <p>
          Title: <input type="text"  />
        </p>
        <p>
          Price: <input type="number" min="0.99" />
        </p>
        <p>
          Descrition: <input type="text" />
        </p>



        <button>Submit</button>
      </form>
      <hr/>
      {
        data.map( (product, i) => {
          return <div>
            <p>Title: {product.title} |
              Price: {product.price} |
              Description: {product.description}
            </p>
          </div>
        })
      }
    </div>
  );
}

export default App;
