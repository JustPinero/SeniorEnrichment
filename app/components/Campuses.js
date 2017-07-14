import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {select} from '../reducers/campuses';

const Campuses = (props)=> {
  return(
    <div>
        <h3>Campuses</h3>
        <div className="row">
        {
          props.campuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <NavLink to={`/campuses/${campus.id}`} className="thumbnail">
                <img src={ campus.photo } />
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                  <small> students</small>
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

const mapDispatch = dispatch =>  ({
    selectCampus: (campus) => dispatch(select(campus))
});

export default withRouter(connect(mapProps, mapDispatch)(Campuses));
