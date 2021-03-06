
import { FETCH_QUESTION_ID_PENDING, FETCH_QUESTION_ID_SUCCESS, FETCH_QUESTION_ID_ERROR,
  DELETE_QUESTION_ID_PENDING, DELETE_QUESTION_ID_SUCCESS, DELETE_QUESTION_ID_ERROR,
  EDIT_QUESTION_PENDING, EDIT_QUESTION_SUCCESS, EDIT_QUESTION_ERROR
} from "../actions/";


const initialState = {
  question: {},
  success: false,
  message: "Question not loaded",
  loading: true
}

export default function(state = initialState, action){
  switch(action.type){

  // Retrieving One Question
  case FETCH_QUESTION_ID_PENDING:
  return {
    question: action.question,
    loading: true
  };
  case FETCH_QUESTION_ID_SUCCESS:
  return {
          ...state,
          // question: {...state.question, [action.question._id]:action.question },
          question: action.question,
          success: action.success,
          loading: false,
          message: action.message
  };
  case FETCH_QUESTION_ID_ERROR:
  return {
        ...state,
        question: action.question,
        success: action.success,
        loading: true,
        message: action.message
  };


  // Deleteing one question
  case DELETE_QUESTION_ID_PENDING:
  return {
    question: action.question,
    loading: true
  };
  case DELETE_QUESTION_ID_SUCCESS:
  return {
          ...state,
          question: action.question,
          success: action.success,
          loading: false,
          message: action.message
  };
  case DELETE_QUESTION_ID_ERROR:
  return {
        ...state,
        question: action.question,
        success: action.success,
        loading: true,
        message: action.message
  };

  // Updating one questions
  case EDIT_QUESTION_PENDING:
  return {
    question: action.question,
    loading: true
  };
  case EDIT_QUESTION_SUCCESS:
  return {
          ...state,
          question: {...state.question, [action.question._id]:action.question },
          success: action.success,
          loading: false,
          message: action.message
  };
  case EDIT_QUESTION_ERROR:
  return {
        ...state,
        question: action.question,
        success: action.success,
        loading: true,
        message: action.message
  };

  //Always return default
  default:
      return state;

    }

}
