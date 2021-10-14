import React from "react";
import { Table } from "./components";

function App() {
  return (
    <div className="App">
      <Table onChange={(state) => console.log(state)} />
    </div>
  );
}

export default App;
