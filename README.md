## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:9000/_healthcheck] to check health check it in the browser.

HOST DEPLOYED: http://54.169.70.63/_healthcheck

## Background
- Create a simple application that can lively update a dashboard when a client 
application clicks on either the orange or blue button.
- The dashboard must show live updates of the number of clicks without polling the database and display a chart after 5 seconds is elapsed. 
- The game can be reset when the page is refreshed. 

## Requirements
• Front End: ReactJS, Typescript.
• Back End: Node.JS with Typescript preferred but you may use any 
language/framework you are comfortable with.
• It is recommended to use AWS services, but you can also use any other cloud 
technologies that you are more comfortable with, however use of modern 
technologies is encouraged (i.e. GraphQL, Docker, etc).
• Suggest taking 2 hours or less to finish this assignment. Be prepared and 
show off your skill/technique/creativity used on this assignment during the 
first-round interview and treat it as a sprint review event.
• Tips: You can create a free tier AWS account for this assignment; your code 
will be reviewed, so please include comments, documentation, unit tests etc. 
as you would normally do in a business project

## Technologies & Frameworks:

This project is built with:

- Express, Typescript, NodeJS, Socket.io
- Jest: testing Library

### `npm run clean`

Remove dist with rimraf library
### `npm run lint`

Check lint code according to tslint.json

### `npm run build`

Run clean and tsc

### `npm run dev:start`
build and start

### `npm dev`

run with nodemon

### `npm test`

run test with jest
