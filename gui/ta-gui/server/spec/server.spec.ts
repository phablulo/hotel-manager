import request = require("request-promise");
import { closeServer } from '../ta-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../ta-server')});

  afterAll(() => {server.closeServer()});

 
  it("envia emails", () => {
   return request.post(base_url + "email", {"json":{"subject": "teste subject", "body" : "teste body"}}).then(body => {
         expect(body).toEqual({success: "O email foi enviado com sucesso"});
         });
     });


  })