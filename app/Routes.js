import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import {fetchStudentBody} from './reducers/students';
import {fetchcampuses} from './reducers/campuses';
import Root from './components/Root';

class Routes extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route exact path="/" component={Root}/>
            <Route exact path="/campuses" component={Campuses}/>
            <Route exact path="/students" component ={Students}/>
            <Route path='addstudent' component ={AddStudent}/>
            <Route path="/campuses/:id" component={Campus}/>
          </Switch>
        </Home>
      </Router>
    );
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudentBody());
    dispatch(fetchcampuses());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapProps, mapDispatch)(Routes);

// <Route path="/students/:id" component={Student}/> */
// }
//
// {/* <Route path="/campuses/:id" compenent={Campus}/> */
// }
