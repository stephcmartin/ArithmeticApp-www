import axios from 'axios';

const ROOT_URL = 'https://steph-ps-backend.herokuapp.com/arithmetic'

export const FETCH_QUESTIONS_PENDING = "FETCH_QUESTIONS_PENDING"
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR"
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS"

export const POST_QUESTION_PENDING = "POST_QUESTION_PENDING"
export const POST_QUESTION_ERROR = "POST_QUESTION_ERROR"
export const POST_QUESTION_SUCCESS = "POST_QUESTION_SUCCESS"

export function fetchQuestions (){

      return  (dispatch, getState) => {
        dispatch({
          type: FETCH_QUESTIONS_PENDING
        });

        return axios({
          method: 'get',
          url: ROOT_URL
        }).then(function(response){
          dispatch({
            type: FETCH_QUESTIONS_SUCCESS,
            questions: response.data,
            success: true,
            message: "Success at fetching data",
            status: "Success"
          });
        }).catch(function(response){
          dispatch({
            type: FETCH_QUESTIONS_ERROR,
            questions: {},
            success: false,
            message: "Error: Could not retrieve data!",
            status: "Error"
          })
        })
      }
}

export function postQuestion (newQuestion){

  return  (dispatch, getState) => {
    dispatch({
      type: POST_QUESTION_PENDING
    });

    return axios({
      method: 'post',
      url: ROOT_URL,
      data: newQuestion,
    }).then(function(response){
      dispatch({
        type: FPOST_QUESTION_SUCCESS,
        question: response.data,
        success: true,
        message: "Success at posting data",
        status: "Success"
      });
    }).catch(function(response){
      dispatch({
        type: POST_QUESTION_ERROR,
        question: {},
        success: false,
        message: "Error: Could not post data!",
        status: "Error"
      })
    })
  }
}
