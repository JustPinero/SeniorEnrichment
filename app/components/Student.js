import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {removeStudent} from '../reducers/students';

const Students = ({allStudents, allCampuses, id, removeStudent}) => {
  const selectedStudent = allStudents.find(student => student.id === +id);
    if (!selectedStudent) return null;
    const studentCampus = allCampuses.find(campus => campus.id === selectedStudent.campusId);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Update Student</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Campus</th>
          <th>Remove Student</th>
        </tr>
      </thead>
      <tbody>
            <tr key={selectedStudent.id}>
              <td>
                <NavLink to= {`/students/${id}/update`} >
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </NavLink>
              </td>
              <td>{selectedStudent.fullName }</td>
              <td>
                <span>{selectedStudent.email}</span>
              </td>
              <td>{studentCampus.name}</td>
              <td>
                <button className="btn btn-default btn-xs" onClick={()=>removeStudent(id)}>
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
            </tr>
      </tbody>
    </table>
  );
};

const mapProps = function (state) {
  return {
    students: state.students.students
  };
};
const mapDispatch = (dispatch)=>({
  removeStudent: (id)=> dispatch(removeStudent(id))
});
export default withRouter(connect(mapProps, mapDispatch)(Students));
