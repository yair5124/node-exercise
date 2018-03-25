'use strict';
const HTTP = require("q-io/http");

HTTP.read('http://localhost:7000')
    .then(id => HTTP.read(`http://localhost:7001/${id}`))
    .then(body => console.log(JSON.parse(body)))
    .catch(err => console.log(err.message))
    .done();
