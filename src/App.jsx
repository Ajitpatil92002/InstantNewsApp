import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<News key={"top"} category={"top"} />} />
        <Route
          path="/business"
          element={<News key={"business"} category="business" />}
        />
        <Route
          path="/entertainment"
          element={<News key={"entertainment"} category="entertainment" />}
        />
        <Route
          path="/environment"
          element={<News key={"environment"} category="environment" />}
        />
        <Route
          path="/technology"
          element={<News key={"technology"} category="technology" />}
        />
        <Route
          path="/science"
          element={<News key={"science"} category="science" />}
        />
        <Route
          path="/sports"
          element={<News key={"sports"} category="sports" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
