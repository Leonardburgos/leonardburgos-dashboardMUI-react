import { useState } from "react";
import RouterComponent from "./Router";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <RouterComponent />
        </Router>
      </div>
    </>
  );
}

export default App;
