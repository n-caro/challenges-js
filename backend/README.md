# backend: blog-api
API for a blog, using Node and Express. The data is persisted in a MySQL database, using Sequelize.

## Install and usage

## Install
```shell
# clone the repository
$ git clone 
$ cd backend

# Install dependencies
$ npm install
```

After install dependencies, create a .env file (you can rename `.env.example` file)

**.env (example)**
```
PORT=3000
DB_USERNAME=root
DB_PASSWORD=password
DB_NAME=api-blog-dev
DB_HOST=127.0.0.1
DB_PORT=3306
TEST_DB_USERNAME=root
TEST_DB_PASSWORD=password
TEST_DB_NAME=api-blog-test
TEST_DB_HOST=127.0.0.1
TEST_DB_PORT=3306
```

Now you need to prepare the database (load migrations and seeders).

```shell
# run this script (note: resets the database if exists)
$ npm run db:reset

# or you can do it manually
npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
```



### Usage
```shell
$ npm start
# or run in dev mode (nodemon)
$ npm run dev
```

### Running tests

Note: You must have the environment variables TEST_DB... Configured.

```shell
# create db for testing
$ npm run db:create:test

# run tests
$ npm test

# (optional) pretest: reset data from db 
$ npm run pretest
```

## Endpoints

| Method   | Endpoint   | Description                                                  |
| -------- | :--------- | ------------------------------------------------------------ |
| `GET`    | /posts     | Displays the list of posts, sorted by creation date.         |
| `GET`    | /posts/:id | Searches for a post with the id specified in the :id parameter and display its details (if doesn't exists it returns an error message). |
| `POST`   | /posts     | Creates a new post based on the data received in the request body and returns it. |
| `PATCH`  | /posts/:id | Updates the post with the id specified in the :id parameter, and update its data according to the request body. |
| `DELETE` | /posts/:id | Delete  a post with the id specified in the :id parameter and display its details (if doesn't exists it returns an error message). |

