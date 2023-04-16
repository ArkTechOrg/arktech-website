import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Body from "./components/body.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Body />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <div className="App">
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
    </div>
  );
}

export default App;
