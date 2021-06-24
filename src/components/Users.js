import React from "react";
import { Table } from "react-bootstrap";

// props = { employees: [{ name: abc, phone: 1234 }, { name: def, phone: 567}] }
// convert DOB to show only month and day
function formatDate(date) {
  const dateArray = date.split("-");
  const month = dateArray[1];
  const dayArray = dateArray[2].split("T");
  const day = dayArray[0];
  const formattedDate = [month, day].join("-");
  return formattedDate;
}

// employee table
function Users({ employees }) {
  return (
    <>
      <Table className="ml-4 mr-4 border table table-striped align-items-middle">
        <thead>
          <tr >
            <th className="h4">Photo</th>
            <th className="h4">Name</th>
            <th className="h4">Phone</th>
            <th className="h4">Email</th>
            <th className="h4">DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employees.rowKey} className="content-center">
              <td >
                <img src={employee.image} alt={employee.name} />
              </td>
              <td >{employee.name}</td>
              <td >{employee.phone}</td>
              <td >{employee.email}</td>
              <td >{formatDate(employee.dob)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
