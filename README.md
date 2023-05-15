# BOND movies API

This is a simple REST API containing bond movies written in Node.js, with the help of Express.js and Nodemon.

## Installation

1. Install node.js, unless you already have it installed.
2. Run `npm install`, to install dependencies.
3. Run `npm run dev`, to start the localhost server.
4. Install Postman for desktop, unless you already have it installed.
5. Start a request in postman to the localhost server.

## API-endpoints

### GET all the movies

- Method: `GET`
- URL: `/movies`

**In postman:** send a request to the localhost server route `/movies` with the method `GET`. View the response in the response body as JSON object.

**Expected response:** 
```
[
    {
        "Title": "Becoming Bond",
        "Year": "2017",
        "Rated": "TV-MA",
        "Released": "20 May 2017",
        "Runtime": "95 min",
        "Genre": "Documentary, Biography, Comedy",
        "Director": "Josh Greenbaum",
        "Writer": "Josh Greenbaum",
        ...
    }
]
```

### GET a specific movie

- Method: `GET`
- URL: `/movies/ID`

Change `ID` to a specific movie id! For example `tt6110504`.

**In postman:** send a request to the localhost server route `/movies/ID` with the method `GET`. View the response in the response body as JSON object.

### POST a new movie

- Method: `POST`
- URL: `/movies`

**In postman:** add a new raw JSON object to the request body with the below example syntax:
`{
    "movie": {
        "imdbID": "51564",
        "Title": "Bond: the history of Bond",
        "Year": "2023"
    }
}`

Make sure to **ALWAYS** add an imdbID!

### PUT updated info into a specifik movie

- Method: `PUT`
- URL: `/movies/ID`

Change `ID` to a specific movie id! For example `tt6110504`.

**In postman:** add the updated info for the specific movie in a raw JSON object to the request body with the below example syntax: `{
    "movie": {
        "Year": "2024"
    }
}`

### DELETE a specifik movie

- Method: `DELETE`
- URL: `/movies/ID`

Change `ID` to a specific movie id! For example `tt6110504`.


## API KEY

This API uses a query API key. To make a request with an API key: request for `http://localhost:PORT?apiKey=API_KEY`, where PORT is changed to the localhost port the server is running on and change the API_KEY to your API key. 

*Psst! Try API_KEY =  8*