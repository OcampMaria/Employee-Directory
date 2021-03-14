import React from "react";

const Employee = ({text, employee, employees, setEmployees}) => {
    //Events 
    const deleteHandler = () => {
        setEmployees(employees.filter(el => el.id !== employee.id))
        
    };

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
    
}

export default Employee;