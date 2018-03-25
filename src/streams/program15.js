var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream')

var gunzip = zlib.createGunzip();
var decrypt = crypto.createDecipher(process.argv[2], process.argv[3]);
var parser = new tar.Parse();

parser.on('entry', function (e) {
    if(e.type.toLowerCase() === 'file') {
        var hash = crypto.createHash('md5', { encoding: 'hex' });
        e.pipe(hash).pipe(concat(function(md5) {
            console.log(md5 + ` ${e.path}`);
        }));
    }
    e.resume();
});

process.stdin.pipe(decrypt).pipe(gunzip).pipe(parser);