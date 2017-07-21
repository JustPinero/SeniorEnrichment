import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import Students from './components/Students';
import Student from './components/Student';
import AddStudent from './components/AddStudent';
import removeStudent from './reducers/students';
import UpdateStudent from './components/UpdateStudentInfo.js';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import AddCampus from './components/AddCampus';
import UpdateCampus from './components/UpdateCampusInfo';
import {fetchStudentBody} from './reducers/students';
import {fetchcampuses} from './reducers/campuses';

class Routes extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={Campuses}/>
            <Route exact path="/campuses" component={Campuses}/>
            <Route exact path="/campuses/:id"
            render = {({match})=>
            <Campus allCampuses= {this.props.campuses} allStudents={this.props.students} id={match.params.id}/>}
          />
            <Route path="/campuses/:id/update" component={UpdateCampus}/>
            <Route exact path="/students/:id"
            render = {({match})=>
            <Student allStudents= {this.props.students} allCampuses= {this.props.campuses} id={match.params.id} removeStudent={removeStudent}/>}
          />
            <Route exact path="/students" component ={Students}/>
            <Route path='/students/:id/update' component ={UpdateStudent}/>
            <Route path='/campuses/:id/addstudent' component ={AddStudent}/>
            <Route path='/addcampus' component ={AddCampus}/>
          </Switch>
        </Main>
      </Router>
    );
  }
}

const mapProps = function(state){
  return({
    students: state.students.students,
    campuses: state.campuses.campuses
  });
};

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudentBody());
    dispatch(fetchcampuses());
  },
  removeStudent: (id) =>{
    dispatch(removeStudent(id));
  }
});

export default connect(mapProps, mapDispatch)(Routes);
