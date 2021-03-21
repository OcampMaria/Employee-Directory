import React from "react";

const Form = ({ setInputText, employees, setEmployees, inputText, setStatus }) => {
  //js code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitEmployeeHandler = (e) => {
    e.preventDefault();
    setEmployees([
      ...employees,
      { text: inputText, 
        completed: false, 
        id: Math.random() * 1000 
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="employee-input"
      />
      <button
        onClick={submitEmployeeHandler}
        className="employee-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-employee">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
