const assert = require('assert');
const myFunc = require(process.argv[2]);

assert.deepEqual(myFunc(42), true, '42 is the most cool number ever');
