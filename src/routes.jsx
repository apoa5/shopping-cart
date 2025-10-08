import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,          
        element: <Home />
      },
      {
        path: "store",
        element: <Store />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
];

export default routes;
