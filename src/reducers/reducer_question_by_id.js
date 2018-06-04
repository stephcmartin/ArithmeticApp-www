
import { FETCH_QUESTION_ID_PENDING, FETCH_QUESTION_ID_SUCCESS, FETCH_QUESTION_ID_ERROR
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
          question: {...state.questions, [action.question._id]:action.question },
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
  default:
      return state;
        
    }

    
    

}
