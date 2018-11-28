import {
  ADD_INTERVIEW_SUCCESS,
  ADD_INTERVIEW_FAILURE,
  ADD_INTERVIEW_STARTED,
  GET_INTERVIEWS_SUCCESS,
  GET_INTERVIEWS_FAILURE,
  GET_INTERVIEWS_STARTED,

} from './actionTypes';
import axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export const addInterview = ({ title, userId }) => {
  return dispatch => {
    dispatch(addInterviewStarted());

    axios
      .post(API_ROOT + `/interviews`, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        dispatch(addInterviewSuccess(res.data));
      })
      .catch(err => {
        dispatch(addInterviewFailure(err.message));
      });
  };
};

const addInterviewSuccess = interview => ({
  type: ADD_INTERVIEW_SUCCESS,
  payload: {
    ...interview
  }
});

const addInterviewStarted = () => ({
  type: ADD_INTERVIEW_STARTED
});

const addInterviewFailure = error => ({
  type: ADD_INTERVIEW_FAILURE,
  payload: {
    error
  }
});



export const getInterviews = () => {
  return dispatch => {
    dispatch(getInterviewsStarted());

    axios
      .get(API_ROOT + `/interviews`)
      .then(res => {
        dispatch(getInterviewsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getInterviewsFailure(err.message));
      });
  };
};

const getInterviewsSuccess = interviews => ({
  type: GET_INTERVIEWS_SUCCESS,
  payload: {
    ...interviews
  }
});

const getInterviewsStarted = () => ({
  type: GET_INTERVIEWS_STARTED
});

const getInterviewsFailure = error => ({
  type: GET_INTERVIEWS_FAILURE,
  payload: {
    error
  }
});
