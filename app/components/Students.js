import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

const Students = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          props.students.map(student => (
            <tr key={student.id}>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <NavLink to={`/students/${student.id}`}>
              { student.fullName }
            </NavLink>
              <td>
                <span>{student.email}</span>
              </td>
              <td>{student.campusId}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

const mapProps = function (state) {
  return {
    students: state.students.students,
    campuses: state.campuses.campuses
  };
};

export default withRouter(connect(mapProps)(Students));
