import React from "react";
//import components
import Employee from "./Employee";

const Table = ({employees, setEmployees, filteredEmployees}) => {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredEmployees.map(employee => (
                    <Employee 
                    setEmployees={setEmployees} employees={employees} 
                    employee={employee}
                    text= {employee.text} 
                    key={employee.id}
                    />
                ))}
                
            </ul>
        </div>
    )
}

export default Table;