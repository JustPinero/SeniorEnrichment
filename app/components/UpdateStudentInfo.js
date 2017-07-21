import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {updateStudent} from '../reducers/students';

class UpdateStudent extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      studentId:'',
      firstName:'',
      lastName:'',
      email:'',
      campusId: '',
      campusName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    console.log(this);
    if(nextProps.campuses.length){
     const currentStudent = nextProps.students.find(student=>(student.id=== +nextProps.match.params.id));
     this.setState({
       studentId: currentStudent.id,
       firstName: currentStudent.firstName,
       lastName: currentStudent.lastName,
       email: currentStudent.email
     });
   };
  }
  handleChange(event) {
    if(event.target.name === "firstName"){
      this.setState({firstName: event.target.value});
    }else if(event.target.name === "lastName"){
      this.setState({lastName: event.target.value});
    }else if(event.target.name === "email"){
      this.setState({email: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const preUpdatedStudent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      campusId: +this.props.match.params.id
    };
  this.props.updateStudent(+this.state.studentId, preUpdatedStudent);
}

  render() {
    return (
      <div>
      <h1>{this.state.campusName}</h1>
        <form onSubmit= {this.handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" value={this.state.firstName} onChange={this.handleChange} id="firstName-field" name="firstName" />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" value={this.state.lastName} onChange={this.handleChange} id="lastName-field" name="lastName" />
            </div>
            <div className="form-group">
                <label>Email Address</label>
                <input type="text" value={this.state.email} onChange={this.handleChange} id="email-field" name="email" />
            </div>
            <button type="submit">Update Student Info</button>
        </form>
        </div>
    );
  }
}

const mapstate = (state)=>{
  return(
  {students: state.students.students,
    campuses: state.campuses.campuses
  }
);};

const mapDispatch = {updateStudent};


export default withRouter(connect(mapstate, mapDispatch)(UpdateStudent));
