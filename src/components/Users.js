import React from "react";

// props = { employees: [{ name: abc, phone: 1234 }, { name: def, phone: 567}] }
function formatDate(date) {
    const dateArray = date.split("-");
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day].join("-");
    return formattedDate;
}


function Users(props) {
  return (
    <>
      <table>
        <thead>
          <th>Photo</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </thead>
        <tbody>
          {" "}
          {props.employees.length === 0 ? (
            <h2>No Employees!</h2>
          ) : (
            props.employees.map((employee) => (
              <tr>
                <td>
                  <img src={employee.image} alt={employee.name} />
                </td>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{formatDate (employee.dob)}</td>
              </tr>
            ))
          )}
          ;
        </tbody>
      </table>
    </>
  );
}

export default Users;
