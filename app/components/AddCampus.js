import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {registercampus} from '../reducers/campuses';

class AddCampus extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      name:'',
      photoUrl:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if(event.target.name === "name"){
      this.setState({name: event.target.value});
    }else if(event.target.name === "photoUrl"){
      this.setState({photoUrl: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCampus = {
      name: this.state.name,
      photoUrl: this.state.photoUrl
    };
  this.props.registercampus(newCampus);
  event.target.value = '';
}

  render() {
    return (
        <form onSubmit= {this.handleSubmit}>
            <div className="form-group">
                <label>Campus Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} id="name-field" name="name" />
            </div>
            <div className="form-group">
                <label>Photo URL</label>
                <input type="text" value={this.state.photoUrl} onChange={this.handleChange} id="photoUrl-field" name="photoUrl" />
            </div>
            <button type="submit">Register New Campus</button>
        </form>
    );
  }
}

const mapstate = (state)=>{
  return(
  {students: state.students.students}
);};

const mapDispatch = {registercampus};


export default connect(mapstate, mapDispatch)(AddCampus);
