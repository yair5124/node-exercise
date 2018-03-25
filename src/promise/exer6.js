'use strict';

var promise = Promise.resolve('RESOLVED!');
var unpromise = Promise.reject(new Error('REJECTED!'));

promise.then(console.log);
unpromise.catch(console.error);