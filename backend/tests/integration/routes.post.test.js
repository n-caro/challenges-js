const supertest = require("supertest");
const app = require("../../server.js");
const { Post } = require("../../models");

const api = supertest(app);

const initialPosts = [
  {
    title: "Post 1",
    body: "Post 1 body",
    image: "http://localhost.dev/image.png",
    categoryId: 1,
    creationDate: new Date(),
  },
  {
    title: "Post 2",
    body: "Post 2 body",
    image: "http://localhost.dev/image.png",
    categoryId: 2,
    creationDate: new Date(),
  },
];

beforeEach(async () => {
  await Post.create(initialPosts[0]);
  await Post.create(initialPosts[1]);
});

describe("GET /posts", () => {
  it("should return a array with all posts", async () => {
    const expectedStatus = 200;
    const response = await api.get("/posts");
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.body).toHaveProperty("posts");
    expect(response.body.posts).toHaveLength(initialPosts.length);
  });
});

describe("GET /posts/:id", () => {
  it("should return a existent post", async () => {
    const expectedId = 1;
    const expectedStatus = 200;
    const response = await api.get("/posts/" + expectedId);
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.body).toHaveProperty("post");
    expect(response.body.post.id).toEqual(expectedId);
  });

  it("should return a status 404 and a message: Post not found.", async () => {
    const invalidId = 99999;
    const expectedErrorMessage = "Post not found.";
    const expectedStatus = 404;
    const response = await api.get("/posts/" + invalidId);
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toEqual(expectedErrorMessage);
  });
});

describe("POST /posts", () => {
  it("should create a post", async () => {
    const postBodySend = {
      title: "New Post",
      body: "Body of post",
      image: "http://localhost.dev/image-valid.png",
      categoryId: 2,
      creationDate: new Date(),
    };
    const expectedStatus = 201;
    const response = await api.post("/posts").send(postBodySend);
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title", postBodySend.title);
  });

  it("should return a 500 status", async () => {
    const invalidPostBody = {
      title: "",
      image: "no-url",
      categoryId: 2,
      creationDate: new Date(),
    };
    const expectedStatus = 500;
    const response = await api.post("/posts").send(invalidPostBody);
    expect(response.statusCode).toEqual(expectedStatus);
  });
});

describe("DELETE /posts/:id", () => {
  it("should delete a existing post and return status 204", async () => {
    const postId = 1;
    const expectedStatus = 204;
    const response = await api.delete("/posts/" + postId);
    expect(response.statusCode).toEqual(expectedStatus);
  });
  it("should return a 404 status and message: Post not found.", async () => {
    const postId = 1456;
    const expectedMessage = "Post not found.";
    const expectedStatus = 404;
    const response = await api.delete("/posts/" + postId);
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.body).toHaveProperty("error", expectedMessage);
  });
});

describe("PATCH /posts/:id", () => {
  it("should update a existing post and return status 204", async () => {
    const postId = 2;
    const expectedStatus = 204;
    const response = await api
      .patch("/posts/" + postId)
      .send({ title: "New Title" });
    expect(response.statusCode).toEqual(expectedStatus);
  });
  it("should return a 500 status and message: Post not found.", async () => {
    const postId = 1456;
    const expectedMessage = "Post does not exist.";
    const expectedStatus = 500;
    const response = await api.patch("/posts/" + postId);
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.body).toHaveProperty("error", expectedMessage);
  });
});
