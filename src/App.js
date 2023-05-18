import "./App.css";
import Home from "./Components/Home";
import React from "react";

function App() {
  return (
    <>
      <div>
        <header className="head">
          <h1>
            <img
              className="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgungjpNLQ-C1VEiIzJfly1FNMzp4ygt9k5cCeNgddg&usqp=CAU&ec=48600113"
              alt="img not found"
            />{" "}
            Shoppi <b style={{ color: "red" }}>5</b>
          </h1>
          <hr />
        </header>
      </div>
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
