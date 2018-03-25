'use strict';

function alwaysThrows() { throw new Error('OH NOES') }
function iterate(argu) {
    console.log(argu);
    return argu + 1;
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(err => console.log(err.message));