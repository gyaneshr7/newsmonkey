import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import React, { Component } from "react";
import { useState } from "react";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
        <Router>
          <Navbar />
          <LoadingBar height={4} color="red" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key={"general"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key={"business"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key={"entertainment"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  key={"general1"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={"health"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key={"science"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key={"sports"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key={"technology"}
                  pageSize={pageSize}
                  apiKey={apiKey}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
    );
}

export default App
