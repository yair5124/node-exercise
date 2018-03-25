/**
 * Created by yairr on 24/05/2017.
 */
var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    const prog = spawn(cmd, args);
    return duplexer(prog.stdin, prog.stdout);
};
