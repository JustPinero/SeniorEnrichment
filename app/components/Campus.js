import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';



class Campus extends Component{


render(){
return(< div >
 <h3>{props.selectedCampus.name}</h3>
 <table className='table'>
       <thead>
         <tr>
           <th></th>
           <th>Name</th>
         </tr>
       </thead>
       <tbody>
         {
           props.students.filter(student=>student.campusId===props.selectedCampus.id).map(
             student => (
             <tr key={student.id}>
               <td>
                 <button className="btn btn-default btn-xs">
                   <span className="glyphicon glyphicon-play"></span>
                 </button>
               </td>
               <td>{ student.fullName}</td>
             </tr>
           ))
         }
       </tbody>
     </table>
 </div>);
}
}
    const mapProps = function (state) {
      return {
        selectedCampus: state.campuses.campuses.filter(campus=>campus.id===this.props.match.params.id)[0],
        students: state.students.students
      };
    };


    export default connect(mapProps)(Campus);
