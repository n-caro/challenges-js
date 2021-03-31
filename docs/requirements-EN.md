# Back end Challenge

You will develop an API for a blog, using Node and Express. The data must be persisted in a MySQL database, using Sequelize. This API should return data in JSON format.

Each post shall contain the following fields:
* ID
* Title
* Content
* Image
* Category
* Date created

The endpoints to be exposed by the API are:

#### GET /posts
It should display a list of posts, sorted by creation date, in descending order. This list should show only the ID, title, image, category and creation date fields.

#### GET /posts/:id
It should search for a post whose id is the one specified in the :id parameter. If it exists, return its details, otherwise return an error message.

#### POST /posts
Shall save a new post according to the data received in the request.

#### PATCH /posts/:id
Shall update the post with the id specified in the :id parameter, and update its data according to the request body. In case it does not exist, return an error message.

#### DELETE /posts/:id
Shall delete the post with the id specified in the :id parameter. In case it does not exist, return an error message.

### Considerations
The correct structuring of the files, good writing of the code will be evaluated. Additionally, you can create an additional table for the categories and relate them through a foreign key in each post. The image field must be the URL of an image, it is not necessary to structure a file storage logic, it can be a reference to an external site (it is a bonus to validate that the URL corresponds to an image, for example, ending in .png, jpg, or check the existence of the resource before storing it).

# Front end Challenge

You will have to develop a client for a Blog. It must be built in React, and consume data from a JSON Placeholder, an API that exposes dummy data in JSON format.

The endpoints you should use are:

GET https://jsonplaceholder.typicode.com/posts
Returns a list of posts

GET https://jsonplaceholder.typicode.com/posts/:id
Returns the detail of a post based on the id specified in the parameter

POST https://jsonplaceholder.typicode.com/posts
Simulates the creation of a new post

PUT/PATCH https://jsonplaceholder.typicode.com/posts/:id
Simulates the update of a post based on the id specified in the DELETE parameter

DELETE https://jsonplaceholder.typicode.com/posts/:id
Simulates the deletion of a post based on the id specified in the DELETE parameter.

Using these endpoints, the application should contain the following sections:

**Home**
Will display a list of posts. In this list, only the title of each post should be shown, and the actions to go to the post detail, edit or delete it.

**Detail**
It should receive the identifier of a post and, if it exists, display its data. Otherwise, it should display an error message.

**Creation form**
Shall display a form allowing to create a new post. The form must contain the fields title and content, and validate them (both are required). When submitting, the request must be made to the corresponding endpoint.

**Edit Form**.
It must receive the identifier of a post and display a form that allows editing it. In case it does not exist, display an error message. The form must contain the title and content fields, and validate them (both are mandatory). When submitting, the request must be made to the corresponding endpoint.

### Other considerations

The app must contain a header with links to the Home and Edit Form. It must be responsive, a template can be used. The "Delete" action that will contain the posts listed in the Home section must make the request to the corresponding endpoint.
The management of the status can be done in the way you prefer, as well as the navigation logic.