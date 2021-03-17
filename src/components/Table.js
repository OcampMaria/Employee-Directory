import React from "react";
//import components
import Employee from "./Employee";

const Table = ({ employees, setEmployees, filteredEmployees, data, setData }) => {
  return (
    <div className="employee-container">
      <ul className="employee-list">
        {filteredEmployees.map((employee) => (
          <Employee
            setEmployees={setEmployees}
            setData={setData}
            data={data}
            employees={employees}
            employee={employee}
            text={employee.text}
            key={employee.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Table;
