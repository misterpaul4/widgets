import React from "react";
import Accordion from "./component/Accordion/Accordion";
import Search from "./component/Search/Search";
import Dropdown from "./component/Dropdown/Dropdown";
import Translate from "./component/Translate/Translate";

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

function App() {

  return (
    <div className="app">
      {/* <Dropdown options={options} label="select a color" currentValue={selected} onSelectChange={updatedSelected} /> */}
      <Translate />
    </div>
  );  
}

export default App;
