import axios from 'axios';

// INITIAL STATE

const initialState = {
  students: []
};

// ACTION TYPES

const INITIALIZE_STUDENTS = 'INITIALIZE_STUDENT_BODY';
const ENROLL_STUDENT     = 'ENROLL_STUDENT';
const UPDATE_STUDENT     = 'UPDATE_STUDENT';
const REMOVE_STUDENT     = 'REMOVE_STUDENT';

// ACTION CREATORS

const init = students => {console.log("Student Reducer working", students);
return ({ type: INITIALIZE_STUDENTS, students});};
const enroll = student => ({type: ENROLL_STUDENT, student});
const update = student => ({type: UPDATE_STUDENT, student});
const remove = id => ({type:REMOVE_STUDENT, id});


// THUNK CREATORS
 export const fetchStudentBody = ()=> dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(init(students)))
    .catch(err => console.error("Unable to retrieve student body", err));
 };

export const enrollStudent = student => dispatch => {
    axios.post('/api/students', student)
    .then(res => res.data)
    .then(student => dispatch(enroll(student)))
    .catch(err => console.error("Unable to enroll student", err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
  .then(res => res.data)
  .then(student => dispatch(update(student)))
  .catch(err => console.error("Unable to update student", err));
};

export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
    .catch(err => console.error('Unable to remove student', err));
};

// REDUCER

export default function reducer (state= initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case INITIALIZE_STUDENTS:
        newState.students= action.students;
        break;
    case ENROLL_STUDENT:
        newState.students= [...state.students, action.student];
        break;
    case REMOVE_STUDENT:
        newState.students= state.students.filter(student => student.id !== action.id);
        break;
    case UPDATE_STUDENT:
        newState.students= students.map(student => (action.student.id === student.id ? action.student : student));
        break;
    default:
      return state;
  }
  return newState;
}
