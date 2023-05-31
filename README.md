# librarymanagemntAPI
this is a restful API for library management system


##Deploy Link
- render Backend link->[https://librarymanagement-uuri.onrender.com/]

## Tech Stacks Used

<p align = "center">

<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
 
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 

<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>
<hr>

## Features

* CRUD Operation
    * Create a new book
    * Get all books
    * Get a book
    * Update a book using book id
    * Delete a Book using book id


## Run Locally
### Clone this Project

```
https://github.com/bire210/librarymanagemntAPI.git
```

### Install npm Packages

```
npm i

````
### Run the Aplication
```
npm start
```

### Runs the project in the development mode

[http://localhost:8080](http://localhost:8080)


### Environment Variables Required
`mongoURL`
`port`



## API Endpoints
   #### Create A Book
```javascript
POST  https://librarymanagement-uuri.onrender.com/api/Create
```
  #### Get all Books
```javascript
GET  https://librarymanagement-uuri.onrender.com/api/Retrieve/
```
  #### Get a Book
```javascript
GET  https://librarymanagement-uuri.onrender.com/api/Retrieve/6475e9f657193c7eb71a67de
```
  #### Update a book
```javascript
PUT  https://librarymanagement-uuri.onrender.com/api/Update/6475e9f657193c7eb71a67de
```
#### Delete a book
```javascript
DELETE  https://librarymanagement-uuri.onrender.com/api/Delete/6475e9f657193c7eb71a67de
```

## Modules

- Book Module




