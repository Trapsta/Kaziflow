import {
  ADD_INTERVIEW_SUCCESS,
  ADD_INTERVIEW_FAILURE,
  ADD_INTERVIEW_STARTED,
  GET_INTERVIEWS_SUCCESS,
  GET_INTERVIEWS_FAILURE,
  GET_INTERVIEWS_STARTED
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  interviewsData: [],
  error: null
};

export default function interviewsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INTERVIEW_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_INTERVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        interviews: [...state.interviews, action.payload]
      };
    case ADD_INTERVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
      case GET_INTERVIEWS_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_INTERVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        interviewsData: action.payload
      };
    case GET_INTERVIEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}