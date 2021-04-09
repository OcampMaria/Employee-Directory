import React from "react";

const Employee = ({ employee }) => {
  return (
 
    <table class="table is-bordered is-striped  is-hoverable is-fullwidth
    ">
      <tr>
        <th title="Photo">Photo</th>
        <th title="First Name">First Name</th>
        <th title="Last Name">Last Name</th>
        <th title="Phone Number">Phone Number</th>
      </tr>
      <tr>
        <td>
          <img src={employee.picture.medium} alt="employee" />
        </td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.cell}</td>
      </tr>
      
    </table>
  );
};

export default Employee;
