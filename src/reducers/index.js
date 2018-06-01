import { combineReducers } from 'redux';
import QuestionsReducer from './reducer_questions'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  questions : QuestionsReducer
});

export default rootReducer;
