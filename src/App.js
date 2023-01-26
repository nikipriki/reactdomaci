import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items';

const FETCH_ITEMS_API = 'https://fakestoreapi.com/products';

function App() {
const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])
  
  const fetchItems = async () => {
    const res = await fetch(FETCH_ITEMS_API);
    const data = await res.json();
    setItems(data);
  }
  
  return (
    <div className="App">
      <Items items={items} />
    </div>
  );
}

export default App;
