import React from "react";

const Employee = ({ text, employee, employees, setEmployees, data, setData }) => {
  //Events
  const deleteHandler = () => {
    setEmployees(employees.filter((el) => el.id !== employee.id));
  };

  return (
    <div className="employee">
      <li className="employee-item">{employee.name.first}</li>
      <li className="employee-item">{employee.name.last}</li>
      <li className="employee-item">{employee.cell}</li>
     

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>

      

      
    </div>
    
  );
};

export default Employee;
