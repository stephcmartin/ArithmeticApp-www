import { combineReducers } from 'redux';
import QuestionsReducer from './reducer_questions'
import QuestionByIdReducer from './reducer_question_by_id'

const rootReducer = combineReducers({
  questions : QuestionsReducer,
  question: QuestionByIdReducer
});

export default rootReducer;
