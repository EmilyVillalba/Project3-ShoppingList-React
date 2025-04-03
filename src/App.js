import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import ShopLayout from './ShopLayout';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

const initialState = {
  items: [
      {id: 1, product: "Apples", quantity: "2 lbs", price: "$5", purchased: false},
      {id: 2, product: "Bananas", quantity: "1.5 lbs", price: "$2.50", purchased: false}
  ]
};

// 🔥 Reducer - Only manages state, doesn't handle methods directly
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_ITEMS':
          return { ...state, items: action.payload };
      default:
          return state;
  }
};
// 🔥 Create Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  const [items , setItems] = useState(store.getState().items);

  function deleteItem(id)
  {
   // setItems(items.filter((item) => item.id !== id));
   const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }

  function addItem(item) 
  {
    const newItem = { ...item, id: Date.now() };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
  }

  function updateItem(updated)
{
    const updatedItems = items.map((item) => item.id === updated.id ? updated : item);
    setItems(updatedItems);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedItems });
}
  return(
    <Router>
        <ShopLayout>
            <Routes>
               <Route path="/" element={ <ProductList items={items} onDelete={deleteItem} /> }    />

               <Route path="/add" element={ <AddProduct onAdd={addItem} /> }    />

               <Route path="/edit/:id" element={ <EditProduct items={items} onUpdate={updateItem} /> } />
            </Routes>
        </ShopLayout>
    </Router>
  );
}

export default App;
