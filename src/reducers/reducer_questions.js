import _ from 'lodash'
import { FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_SUCCESS,
  POST_QUESTION_PENDING, POST_QUESTION_ERROR, POST_QUESTION_SUCCESS
} from "../actions/";


const initialState = {
  questions: {},
  success: false,
  message: "No Data Loaded",
  loading: true
}

export default function(state = initialState, action){
  switch(action.type){
    // Fetching Questions
    case FETCH_QUESTIONS_PENDING:
    return {
      questions: action.questions,
      loading: true
    };
    case FETCH_QUESTIONS_SUCCESS:
    return {
            ...state,
            questions: _.mapKeys(action.questions, '_id'),
            success: action.success,
            loading: false,
            message: action.message
      };
      case FETCH_QUESTIONS_ERROR:
      return {
              ...state,
              questions: action.questions,
              success: action.success,
              loading: true,
              message: action.message
    };
    // Posting Questions
    case POST_QUESTION_PENDING:
    return {
      questions: action.question,
      loading: true
    };
    case POST_QUESTION_SUCCESS:
    return {
            ...state,
            questions: {...state.questions, [action.question._id]:action.question },
            success: action.success,
            loading: false,
            message: action.message
    };
    case POST_QUESTION_ERROR:
    return {
          ...state,
          questions: action.question,
          success: action.success,
          loading: true,
          message: action.message
    };

  default:
      return state;
        
    }

    
    

}
