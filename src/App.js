import axios from "axios";
import React, {useState, useEffect} from "react";
import './App.css';
// importing components
import Form from "./components/Form";
import Table from "./components/Table";
import API from "./utils/API"



function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredEmployees, setFilteredEmployees]= useState([]);
  const [data, setData] = useState([]);

  //Run Once when the app starts
  useEffect(() =>{
    getLocalEmployees();

  }, []); 

  //UseEffect
  useEffect(() => {
    filterHandler();
    saveLocalEmployees();
    getData();

  }, [employees, status]);

  //functions
  const getData = () => {
    API.getEmployees()
    .then(res => setData(res.data)
    )
    . catch (err => console.log(err));
  };

  const filterHandler =() => {
    switch(status){
      case "completed":
        setFilteredEmployees(employees.filter((employee) => employee.completed === true ))
        break;
      case 'uncompleted':
        setFilteredEmployees(employees.filter((employee) => employee.completed === false ))
      default:
        setFilteredEmployees(employees);
        break;
    }
  };

  //save to local storage
  const saveLocalEmployees = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const getLocalEmployees = () => {
    if (localStorage.getItem("employees") === null){
      localStorage.setItem("employees", JSON.stringify([]));
    }else{
     let employeeLocal = JSON.parse(localStorage.getItem("employees"));

     setEmployees(employeeLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Employee Directory</h1>
      </header>

      <Form 
        inputText={inputText} 
        employees={employees} 
        setEmployees={setEmployees} 
        setInputText= {setInputText}
        setStatus={setStatus}
        
      />
      <Table 
      setEmployees={setEmployees} 
      employees={employees}
      filteredEmployees={filteredEmployees}
      data={data}
      setData={setData}
      />
      
    </div>
  );
}

export default App;
