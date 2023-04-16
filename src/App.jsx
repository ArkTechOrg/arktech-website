import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Body from "./components/Body/Body";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/AboutUs/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Body />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <div className="App">
      <React.Fragment>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </React.Fragment>
    </div>
  );
}

export default App;
