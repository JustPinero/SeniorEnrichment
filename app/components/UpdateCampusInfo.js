import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {updatecampus} from '../reducers/campuses';

class UpdateCampus extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      campusId:'',
      name:'',
      photoUrl:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.campuses.length){
     const currentCampus = nextProps.campuses.find(campus=>(campus.id=== +nextProps.match.params.id));
     this.setState({
       campusId: currentCampus.id,
       name: currentCampus.name,
       photoUrl: currentCampus.photo,
     });
   };
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
    const campusUpdate = {
      name: this.state.name,
      photoUrl: this.state.photoUrl
    };
  this.props.updatecampus(+this.state.campusId, campusUpdate);
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
            <button type="submit">Update Campus</button>
        </form>
    );
  }
}

const mapstate = (state)=>{
  return(
  {campuses: state.campuses.campuses}
);};

const mapDispatch = {updatecampus};


export default withRouter(connect(mapstate, mapDispatch)(UpdateCampus));
