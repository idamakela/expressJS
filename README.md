# BOND movies API

This is a simple rest api containing bond movies written in Node.js, with the help of Express.js and Nodemon. 

## Installation 

1. Install node.js, unless you already have it installed.
2. Run `npm install`, to install dependencies.
3. Run `npm run dev`, to start the localhost server.
4. Install Postman for desktop, unless you already have it installed.
5. Start a request in postman to the localhost server.

## API-endpoints

### GET all the moves

* Method: `GET`
* URL: `/movies`

### GET specific movie

* Method: `GET`
* URL: `/movies/ID`

Change `ID` to a specific movie id! For example `tt6110504`

### POST a new movie

* Method: `POST`
* URL: `/movies`

**In postman**: add a new raw JSON object to the request body with the below example syntax:
`{
    "movie": {
        "imdbID": "51564",
        "Title": "Bond: the history of Bond",
        "Year": "2023"
    }
}`

Make sure to **ALWAYS** add an imdbID!

### PUT updated info to specifik movie

* Method: `PUT`
* URL: `/movies/ID`

Change `ID` to a specific movie id! For example `tt6110504`.

**In postman:** add the updated info for the specific movie in a raw JSON object to the request body with the below example syntax: `{
    "movie": {
        "Year": "2024"
    }
}`

