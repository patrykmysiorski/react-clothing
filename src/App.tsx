import React from "react";
import MainPage from "./components/mainPage/MainPage";
import Header from "./components/header/Header";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
