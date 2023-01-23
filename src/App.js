import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Purchased from './components/Purchased';

import data from './data';
import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";



function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <BrowserRouter>
        <Route exact path="/">
          <div className="row">
            <Main products={products} onAdd={onAdd}></Main>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket>
          </div>
        </Route>
        <Route exact path="/purchased">
          <Purchased />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
