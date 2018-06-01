import axios from 'axios';

const ROOT_URL = 'https://steph-ps-backend.herokuapp.com/arithmetic'

export const FETCH_QUESTIONS_PENDING = "FETCH_QUESTIONS_PENDING"
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR"
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS"

export function fetchQuestions (){

      return  (dispatch, getState) => {
        dispatch({
          type: FETCH_QUESTIONS_PENDING,
          questions:[],
          status: "Pending"
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
            questions: [],
            success: false,
            message: "Error: Could not retrieve data!",
            status: "Error"
          })
        })
      }
}
