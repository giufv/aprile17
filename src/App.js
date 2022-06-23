
import './App.css';
import Header from './components/Header';



const data = {
  "products": [
    {
      "id": 1,
      "name": "Maglietta",
      "price": 22,
      "category": "abbigliamento"
    },
    {
      "id": 1,
      "name": "Maglietta",
      "price": 22,
      "category": "abbigliamento"
    },

    {
      "id": 1,
      "name": "Maglietta",
      "price": 22,
      "category": "abbigliamento"
    },
    {
      "id": 1,
      "name": "Maglietta",
      "price": 22,
      "category": "abbigliamento"
    },
  ]
}




function App() {
  return (
    <>
      <Header testo="Testo da da stampare proveniente da App.js" />


 
    </>
  );
}

export default App;
