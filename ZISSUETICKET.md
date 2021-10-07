# PROJECT ISSUE TICKET


## Unexpected Behavior

I'm trying to create a comment and get it to go to the comments page, im having trouble trying to create the comment, I get a 404 not found

## Expected Behavior

I expected to create the comment in the form screen, click the submit button to send the comment to the comments screen, and then view the comment on the comments screen

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. Clone this repo.
2. Run `npm start`.
3. Navigate to the landing page.
4. Create a account, click on comments, click on add
5. create the comment, click submit
6. See the subsequent error in the console.
```

## Documentation

POST http://localhost:3000/supports
404 not found


Uncaught (in promise) Error: createError.js:16
Request failed with status code 404
  at createError (createError.js:16)
  at settle (settle.js:16)
  at XMLHttpRequest.onloadend (xhr.js:66)


## Attempted Resolution

asked jorge