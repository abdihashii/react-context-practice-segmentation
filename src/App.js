import React from "react";
import "./App.css";
import Builder from "./Components/Builder";
import TargetingContextProvider from "./Contextes/TargetingContext";

function App() {
  return (
    <TargetingContextProvider>
      <div className="App">
        <Builder />
      </div>
    </TargetingContextProvider>
  );
}

export default App;
