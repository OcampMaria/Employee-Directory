import React from "react";

//import components
import Employee from "./Employee";

const Table = ({ employees, setEmployees, data }) => {
  return (
    <div className="employee-container">
      <ul className="employee-list">
        {data.map((employee) => (
          <Employee
            setEmployees={setEmployees}
            employees={employees}
            employee={employee}
            text={employee.text}
            key={employee.cell}
          />
        ))}
        
      </ul>
    </div>
  );
};

export default Table;
