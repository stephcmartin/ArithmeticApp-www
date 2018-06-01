import { FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_SUCCESS} from "../actions/";

const initialState = {
  questions: [],
  success: false,
  message: "No Data Loaded",
  status: "Pending"
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_QUESTIONS_PENDING:
    return {
      questions: action.questions,
      status: action.status
    };
    case FETCH_QUESTIONS_SUCCESS:
    return {
            ...state,
            questions: action.questions,
            success: action.success,
            status: action.status,
            message: action.message
  };
  case FETCH_QUESTIONS_ERROR:
  return {
          ...state,
          questions: action.questions,
          success: action.success,
          status: action.status,
          message: action.message
};
  default:
      return state;
  }
}
