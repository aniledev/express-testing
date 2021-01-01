// require the chai assertion library
const { expect } = require("chai").expect;
// require the supertest library; supertest is the name we give to the SuperTest function
const supertest = require("supertest");
// require the app Express application
const app = require("../app.js");

// to invoke the endpoint we call the supertest method, passing it to the Express server object
// invoke the endpoint with one of the built-in methods corresponding to the HTTP methods
// using chai to assert that we expect to get a status code of 200 and a res body of Hello Express

describe("Express App", () => {
  test("should return a message from GET /", () => {
    return supertest(app).get("/").expect(200, "Hello Express!");
  });
});
