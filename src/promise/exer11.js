'use strict';

function all(prom1, prom2) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        let values = [];
        prom1.then(result1 => {
            counter++;
            values[0] = result1;
            if (counter >= 2) resolve(values);
        });
        prom2.then(result2 => {
            counter++;
            values[1] = result2;
            if (counter >= 2) resolve(values);
        });
    });
}
all(getPromise1(), getPromise2()).then(console.log);