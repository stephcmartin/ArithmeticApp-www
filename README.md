# Front End Repo for Arithmetic App

### React.js application that consumes the questions from a back end API hosted on Heroku.


This application provides a front end to manage questions, answers, and distractors. The following operations are supported:

-   View all questions ✅
-   Create a new question ✅
-   View a selected question from the list ❌ (Working Progress!)
-   Edit an existing question ❌ (Working Progress!)
-   Delete an existing question ❌ (Working Progress!)

The service is hosted on Heroku using the free hobby tier, which means it will be shut down after a period of no activity. It may take several seconds for a response on the first request while this instance and the back end service are started.

## Planning + Execution
I had 2 evenings (still have a full time job!) and 2 full days to complete this project, which reminded me of the good times at General Assembly's Web Develoment Immersive bootcamp(WDI). At WDI, I had created 3 full stack projects using Ruby on Rails as a backend, and POJO/ember for the front end. 
Rather then sicking with a tech stack that I was use to, I though I'd push myself to create a CRUDable app with Node.js and React.js.

I had initially thought the biggest challenge would be setting up the backend; however, I managed to get that done pretty much by the 2nd evening.

The toughest hurdle was doing the CRUD actions with react.js, a language that I'm still relatively new to. Sadly, with the limited timeframe I only managed to full finish the Create and Update action.
 
## Challenges

### State in Reducer:

- When posting the question to the backend, I almost forgot to include the question._id along with the new question we generated from the form.

```    case POST_QUESTION_SUCCESS:
    return {
            ...state,
            questions: {...state.questions, [action.question._id]:action.question },
            success: action.success,
            loading: false,
            message: action.message
    };
```

### Rendering a single post

-  A lot of time was spent trying to figure out how to *slot in* the question into the reducer object which contains all of the other questions. 
- this ```this.props``` was not rendering, I could not add ```this.props.match.params.questionID``` to the ```fetchQuestionById()``` function. 

## What I would do next

- Add success/error messages to UI
- Work on Update and Delete actions
- Added Search Bar functionality
- Added pagination functionality
- Work on CORS on backend

## To Use This Repo
```
> install <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">Allow-Control-Allow-Origin: * from google chrome store</a>* Must turn this on for CORS to work
> npm install
> npm start
> head to localhost:8080
```
