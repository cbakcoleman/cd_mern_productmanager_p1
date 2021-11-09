import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  // data coming from request
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

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
    console.log("Form Submitted: " + title, price, description);

    // instead of the following can do as shown on line 35
    // const newProduct = {
    //   title : title,
    //   price : price,
    //   description : description
    // }

    axios.post("http://localhost:8000/api/products/new", {title, price, description})
      .then ( res => console.log(res.data))
      .catch ( err => console.log.log(err))
  }

  return (
    <div className="App">
      <h1>Data from Server [all products]</h1>
      {/* {JSON.stringify(data)} */}
      Title: {JSON.stringify(title)} | Price: {JSON.stringify(price)} | Description {JSON.stringify(description)}
      <hr/>

      <form onSubmit={formSubmit}>
        <p>
          Title: <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title}/>
        </p>

        <p>
          Price: <input type="number" min="0.99" onChange={ (e) => setPrice(e.target.value)} value={price}/>
        </p>

        <p>
          Descrition: <input type="text" onChange={ (e) => setDescription(e.target.value)} value={description}/>
        </p>

        <button>Submit</button>
      </form>

      <hr/>
      {
        data.map( (product, i) => {
          return <div key={product._id}>
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
