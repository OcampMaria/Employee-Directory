import React, {useState} from "react";
import './App.css';
// importing components
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [inputText, setInputText] = useState("");

  const [employees, setEmployees] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>Employee Directory</h1>
      </header>
      <Form inputText={inputText} employees={employees} setEmployees={setEmployees} setInputText= {setInputText}/>
      <Table/>
    </div>
  );
}

export default App;
