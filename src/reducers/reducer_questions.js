import { FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_SUCCESS} from "../actions/";

const initialState = {
  questions: [],
  success: false,
  message: "No Data Loaded",
  loading: true
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_QUESTIONS_PENDING:
    return {
      questions: action.questions,
      loading: true
    };
    case FETCH_QUESTIONS_SUCCESS:
    return {
            ...state,
            questions: action.questions,
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
  default:
      return state;
  }
}
