import axios from 'axios';
import { push } from 'react-router-redux'

const ROOT_URL = 'https://steph-ps-backend.herokuapp.com/arithmetic'

export const FETCH_QUESTIONS_PENDING = "FETCH_QUESTIONS_PENDING"
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR"
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS"

export const POST_QUESTION_PENDING = "POST_QUESTION_PENDING"
export const POST_QUESTION_ERROR = "POST_QUESTION_ERROR"
export const POST_QUESTION_SUCCESS = "POST_QUESTION_SUCCESS"

export const FETCH_QUESTION_ID_PENDING = "FETCH_QUESTION_ID_PENDING"
export const FETCH_QUESTION_ID_SUCCESS = "FETCH_QUESTION_ID_SUCCESS"
export const FETCH_QUESTION_ID_ERROR = "FETCH_QUESTION_ID_ERROR"

export const DELETE_QUESTION_ID_PENDING = "DELETE_QUESTION_ID_PENDING"
export const DELETE_QUESTION_ID_SUCCESS = "DELETE_QUESTION_ID_SUCCESS"
export const DELETE_QUESTION_ID_ERROR = "DELETE_QUESTION_ID_ERROR"


// Retrieveing All Questions
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

// Creating New Question

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
        type: POST_QUESTION_SUCCESS,
        question: response.data,
        success: true,
        message: "Success at posting data",
        status: "Success"
      });
      dispatch(push('/questions'))
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

// Retrieveing One Questions
export function fetchQuestionById (questionId){

  return  (dispatch, getState) => {
    dispatch({
      type: FETCH_QUESTION_ID_PENDING,
      question: {},
      status: "Pending"
    });

    return axios({
      method: 'get',
      url: `https://steph-ps-backend.herokuapp.com/arithmetic/${questionId}`
    }).then(function(response){
      dispatch({
        type: FETCH_QUESTION_ID_SUCCESS,
        question: response.data,
        success: true,
        message: "Success at fetching question by questionId",
        status: "Success"
      });
    }).catch(function(response){
      dispatch({
        type: FETCH_QUESTION_ID_ERROR,
        question: {},
        success: false,
        message: "Error: Could not retrieve that question!",
        status: "Error"
      })
    })
  }
}

// Deleting One Question

export function deleteQuestionById (questionId){

  return  (dispatch, getState) => {
    dispatch({
      type: DELETE_QUESTION_ID_PENDING,
      question: {},
      status: "Pending"
    });

    return axios({
      method: 'delete',
      url: `https://steph-ps-backend.herokuapp.com/arithmetic/${questionId}`
    }).then(function(response){
      dispatch({
        type: DELETE_QUESTION_ID_SUCCESS,
        question: response.data,
        success: true,
        message: "Success at deleting question by questionId",
        status: "Success"
      });
    }).catch(function(response){
      dispatch({
        type: DELETE_QUESTION_ID_ERROR,
        question: {},
        success: false,
        message: "Error: Could not delete that question!",
        status: "Error"
      })
    })
  }
}

