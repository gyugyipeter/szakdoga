import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import AppContextProvider from "./components/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Body />
    </AppContextProvider>
  );
}

export default App;
