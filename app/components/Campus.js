import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {removecampus} from '../reducers/campuses';



const Campus = ({allCampuses, allStudents,id})=>{
  console.log("allcampuses", allCampuses);
const currentCampus = allCampuses.find(campus=> campus.id === +id);
    if(!currentCampus) return null;
return(< div >
 <h3>{currentCampus.name}</h3>
 <NavLink to={`/campuses/${currentCampus.id}/update`}>
   Update Campus Info
 </NavLink>
 <table className='table'>
       <thead>
         <tr>
           <th>Name</th>
           <th>Remove Student</th>
         </tr>
       </thead>
       <tbody>
         {allStudents.map(
             student => {
               if(currentCampus.id===student.campusId){
               return(
             <tr key={student.id}>
               <NavLink to={`/students/${student.id}`}>
               {student.fullName}
              </NavLink>
              <td>
                 <button className="btn btn-default btn-xs" onClick = {()=>props.removecampus(student.id)}>
                   <span className="glyphicon glyphicon-play"></span>
                 </button>
               </td>
             </tr>
           );};
         })
         }
       </tbody>
     </table>
     <NavLink to={`/campuses/${currentCampus.id}/addStudent`}>
     Enroll New Student!!
   </NavLink>
 </div>);
};
    const mapProps = function (state) {
      return {
        campuses: state.campuses.campuses,
        students: state.students.students
      };
    };
    const mapDispatch = {removecampus};

    export default withRouter(connect(mapProps, mapDispatch)(Campus));
