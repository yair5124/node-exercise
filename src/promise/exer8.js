'use strict';

var promise = new Promise((resolve, reject) => {
   resolve('MANHATTAN');
});

function attachTitle(name) {
    return `DR. ${name}`;
}

promise.then(attachTitle).then(console.log);
