'use strict';
const HTTP = require("q-io/http");

HTTP.read('http://localhost:1337')
    .then(body => console.log(JSON.parse(body)))
    .catch(err => console.log(err.message))
    .done();
