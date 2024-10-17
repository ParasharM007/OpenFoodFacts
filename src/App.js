import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import SingleProduct from "./component/SingleProduct";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products category={"/"} key={"home"} page={1} pageSize={15} />
          }
        />
        <Route
          exact
          path="/cookies"
          element={
            <Products
              category={"cookies"}
              key={"cookies"}
              page={1}
              pageSize={15}
            />
          }
        />
        <Route
          exact
          path="/drinks"
          element={
            <Products
              category={"drinks"}
              key={"drinks"}
              page={1}
              pageSize={15}
            />
          }
        />
        <Route
          exact
          path="/chocolate"
          element={
            <Products
              category={"chocolate"}
              key={"chocolate"}
              page={1}
              pageSize={15}
            />
          }
        />
        <Route
          exact
          path="/dairy"
          element={
            <Products category={"dairy"} key={"dairy"} page={1} pageSize={15} />
          }
        />
        <Route
          exact
          path="/snacks"
          element={
            <Products
              category={"snacks"}
              key={"snacks"}
              page={1}
              pageSize={15}
            />
          }
        />

        <Route exact path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
