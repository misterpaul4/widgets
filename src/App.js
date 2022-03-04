import React, { useState } from "react";
import Accordion from "./component/Accordion/Accordion";
import Search from "./component/Search/Search";
import Dropdown from "./component/Dropdown/Dropdown";
import Translate from "./component/Translate/Translate";
import Route from "./Route";
import { options } from "./component/Translate/languageOptions";

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
  const [selected, updatedSelected] = useState("tr");

  return (
    <div className="app">
      <Route path="/accordion">
        <Accordion items={items} />
      </Route>

      <Route path="/wikipedia">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown options={options} label="select language" currentValue={selected} onSelectChange={updatedSelected} />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );  
}

export default App;
