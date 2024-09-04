
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState(null); // Initialize product as null

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json)) // Access the first product in the array
      .catch(error => console.error("Error:", error));
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  if (!product) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
<div>
  {/* This line was removed because rendering an array directly in <h1> doesn't make sense */}
  {/* <h1>{product}</h1> */}
  {product.map(product => (
    <div key={product.id}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  ))}
</div>

  );
}

export default App;


// import { useState ,useEffect} from 'react'
// import './App.css'

// function App() {


//   const [product, setProduct] = useState(null); // Initialize product as null

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
           
  
//       .then(json => setProduct(json))
//       .catch(error => console.error("Error:", error));
//   }, []); // The empty dependency array ensures this runs only once when the component mounts

//   if (!product) {
//     return <div>Loading...</div>; // Show loading state while data is being fetched
//   }
//   return (
//     <>
//     <div>
//       <h1>sdfghjjhgf</h1>
//         <h1>{product.id}</h1>
//      <img src={product.image} alt={product.title} />
//      <h1>{product.description}</h1>
//    </div>
//     </>
//   )
// }

// export default App
