import _ from 'lodash'
import { FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_SUCCESS,
  POST_QUESTION_PENDING, POST_QUESTION_ERROR, POST_QUESTION_SUCCESS,
  FETCH_QUESTION_ID_PENDING, FETCH_QUESTION_ID_SUCCESS, FETCH_QUESTION_ID_ERROR
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

  // Retrieving One Question
  case FETCH_QUESTION_ID_PENDING:
  return {
    question: action.question,
    loading: true
  };
  case FETCH_QUESTION_ID_SUCCESS:
  console.log('action', action.question)
  // This logs {_id: "5b10925a70ef6b09da172c58", 
  // question: "what is 1 + 1", 
  // answer: "2", distractors: "3", 
  // createdAt: "2018-06-01T00:24:58.165Z", …}
  // Which is the data I want!
  return {
          ...state,
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
  default:
      return state;
        
    }

    
    

}
