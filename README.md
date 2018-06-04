# Front End Repo for Arithmetic App

### React.js application that consumes the questions from a back end API hosted on Heroku.


This application provides a front end to manage questions, answers, and distractors. The following operations are supported:

-   View all questions ✅
-   Create a new question ✅
-   View a selected question from the list ✅
-   Edit an existing question ❌ (Working Progress!)
-   Delete an existing question ✅

The service is hosted on Heroku using the free hobby tier, which means it will be shut down after a period of no activity. It may take several seconds for a response on the first request while this instance and the back end service are started.

## Planning + Execution
I had 2 evenings (still have a full time job!) and 2 full days to complete this project, which reminded me of the good times at General Assembly's Web Develoment Immersive bootcamp(WDI). At WDI, I had created 3 full stack projects using Ruby on Rails as a backend, and POJO/ember for the front end.

Rather then sicking with a tech stack that I was use to, I though I'd push myself to create a CRUDable app with Node.js and React.js.

I had initially thought the biggest challenge would be setting up the backend; however, I managed to get that done pretty much by the 2nd evening.

The toughest hurdle was doing the CRUD actions with react.js, a language that I'm still relatively new to. Sadly, with the limited timeframe I managed all to complete Create, Read and Delete.

## What I would do next

- Add success/error messages to UI
- Work on Update action
- Added Search Bar functionality
- Added pagination functionality


## To Use This Repo
```
> npm install
> npm start
> head to localhost:8080
```
