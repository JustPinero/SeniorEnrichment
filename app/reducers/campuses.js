import axios from 'axios';

// INITIAL STATE

const initialState = {
  campuses: []
};

// ACTION TYPES

const INITIALIZE_CAMPUSES = 'INITIALIZE_CAMPUS_BODY';
const REGISTER_CAMPUS = 'REGISTER_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';


// ACTION CREATORS

const init = campuses => {console.log("Campus Reducer working", campuses);
return ({ type: INITIALIZE_CAMPUSES, campuses});};
const register = campus => ({type: REGISTER_CAMPUS, campus});
const update = campus => ({type: UPDATE_CAMPUS, campus});
const remove = id => ({type:REMOVE_CAMPUS, id});



// THUNK CREATORS
 export const fetchcampuses = ()=> dispatch => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      console.log("THUNK REQUEST CAMPUSES", campuses);
      dispatch(init(campuses));})
    .catch(err => console.error("Unable to retrieve campus body", err));
 };

export const registercampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(campus => {
      console.log('registering campus', campus);
      return(dispatch(register(campus)));
    })
    .catch(err => console.error("Unable to register campus", err));
};

export const updatecampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
  .then(res => res.data)
  .then(campus => dispatch(update(campus)))
  .catch(err => console.error("Unable to update campus", err));
};

export const removecampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
    .catch(err => console.error('Unable to remove campus', err));
};

// REDUCER

export default function reducer (state= initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case INITIALIZE_CAMPUSES:
        newState.campuses= action.campuses;
        break;
    case REGISTER_CAMPUS:
        newState.campuses= [...state.campuses, action.campus];
        break;
    case REMOVE_CAMPUS:
        newState.campuses= state.campuses.filter(campus => campus.id !== action.id);
        break;
    case UPDATE_CAMPUS:
        newState.campuses= campuses.map(campus => (action.campus.id === campus.id ? action.campus : campus));
        break;
    default:
      return state;
  }
  return newState;
}
