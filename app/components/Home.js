import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Home = (props) => (
  <div id="Home" className="container-fluid">
</div>
);

export default withRouter(connect()(Home));
