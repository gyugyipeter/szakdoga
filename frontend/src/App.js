import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import AppContextProvider from "./components/AppContext";
import ApiContextProvider from "./components/ApiContext";

function App() {
  return (
    <AppContextProvider>
      <ApiContextProvider>
        <Header />
        <Body />
      </ApiContextProvider>
    </AppContextProvider>
  );
}

export default App;
