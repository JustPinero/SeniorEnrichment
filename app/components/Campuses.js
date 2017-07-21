import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {removecampus} from '../reducers/campuses';

const Campuses = (props)=> {
  console.log(props);
  return(
    <div>
        <h3>Campuses</h3>
        <div className="row">
          <NavLink to={'/addcampus'} >Register New Campus</NavLink>
        {
          props.campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <NavLink to={`/campuses/${campus.id}`} className="thumbnail">
                <img src={ campus.photo } />
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </NavLink>
            </div>
          ))
        }
        </div>
      </div>
  );
};


const mapProps = function (state) {
  return {
    campuses: state.campuses.campuses
  };
};

export default withRouter(connect(mapProps)(Campuses));
