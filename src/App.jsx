import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
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
