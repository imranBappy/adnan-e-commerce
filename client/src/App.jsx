import { useState } from 'react'

import './App.css'

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './component/Home';
import Shop from './component/Shop';
import Cart from './component/Cart';



function App() {
  // const [count, setCount] = useState(0)'

  const [cart, setCart] = useState([])
  const handleCard = product => {

    setCart([...cart, product]);
  }
  console.log(cart);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home cart={cart} handleCard={handleCard} />
      ),
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/cart",
      element: <Cart  />
    },
  ]);
  return (
    <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
