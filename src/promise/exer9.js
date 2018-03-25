'use strict';

var input = process.argv[2];

function parsePromised() {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(input));
        } catch(err) {
            reject(err.message);
        }
    });
}
parsePromised().then(console.log).catch(console.log);
