var test = require('tape')
var feedCat = require(process.argv[2]);

test('Feeding cats works great if you dont give them chocolate', function (t) {
    t.deepEqual(feedCat('anything'), 'yum');
    t.throws(feedCat.bind(null, 'chocolate'));
    t.end();
})