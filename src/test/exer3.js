var test = require('tape');
var fancify = require(process.argv[2]);

test('Checking the amazing fancify function', function (t) {
    t.equal(fancify('Hello'), '~*~Hello~*~');
    t.equal(fancify('Hello', true), '~*~HELLO~*~');
    t.equal(fancify('Hello', false, '!'), '~!~Hello~!~');
    t.end();
})