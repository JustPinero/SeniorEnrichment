import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

export function Students (props){
  return(
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Campus</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          props.students.map(student => (
            <tr key={student.id}>
              <td>{ student.fullName }</td>
              <td>
                <span>{student.campusId}</span>
              </td>
              <td>{student.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}


const mapProps = function (state) {
  return {
    campuses: state.campuses.campuses,
    students: state.students.students
  };
};

export default connect(mapProps, null)(Students);
