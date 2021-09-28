# How to start the backend

Navagate to the path {ROOT_PROJECT}/api/

install all dependencies at package.json
### `npm install`

Start the project 
### `node app.js`

Access the project in browser
### http://localhost:8080/

Install modules to restart the server away in had alteration on code. 
### `npm install -g nodemon`

Init the project using nodemon with watchermode
### `nodemon app.js`


# To set up container the database

Execute docker compose to up database 
### `docker-compose -f docker-compose-db.yml up -d`
or just set up another one in database setting file path `{ROOT_PROJECT}/api/models/db.js` as example in `{ROOT_PROJECT}/api/models/db-example.js`
if are using database set up settings in .env file like as .env-example


# To start frontend the app

install all dependencies at package.json
### `npm install`

Navagate to the path {ROOT_PROJECT}/ui/

### `npm start`

CREATE TABLE categories
(
  id int(4) AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  createdAt timestamp,
  updatedAt timestamp,
  PRIMARY KEY (id)
);


CREATE TABLE devices
(
    id int(4) PRIMARY KEY AUTO_INCREMENT,
    color varchar(255),
    partNumber varchar(255),
    category_id int(4),
    createdAt timestamp,
  	updatedAt timestamp,
    CONSTRAINT fk_categories FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE RESTRICT ON DELETE RESTRICT
);
