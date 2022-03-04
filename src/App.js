import React, { useState } from "react";
import Accordion from "./component/Accordion/Accordion";
import Search from "./component/Search/Search";
import Dropdown from "./component/Dropdown/Dropdown";

const items = [
  {
    title: "what is react",
    content: "react is a front end framework"
  },
  {
    title: "who created react",
    content: "facebook"
  },
  {
    title: "alternative to redux",
    content: "useContext"
  }
]

const options = [
  {
    label: "Select...",
    value: ""
  },
  {
    label: "Color Red",
    value: "red"
  },
  {
    label: "Color Green",
    value: "green"
  },
  {
    label: "Color Blue",
    value: "blue"
  }
]

function App() {
  const [selected, updatedSelected] = useState("");

  return (
    <div className="app">
      <Dropdown options={options} label="select a color" currentValue={selected} onSelectChange={updatedSelected} />
    </div>
  );  
}

export default App;
