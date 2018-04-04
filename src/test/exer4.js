var test = require('tape')
var repeatCallback = require(process.argv[2]);

test('Repeat Callback', function (t) {
    t.plan(6);
    repeatCallback(6, function() {
        t.pass('callback called');
    })
})