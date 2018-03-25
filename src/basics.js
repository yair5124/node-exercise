const fs = require("fs");
const readFile = promisify(fs.readFile);

function promisify(func) {
    return (...args) =>
        new Promise((resolve, reject) => {
            const callback = (err, data) => err ? reject(err) : resolve(data);

            func.apply(this, [...args, callback]);
        });
}

readFile(`${__dirname}/streams/library.txt`).then(data => console.log(data.toString()));