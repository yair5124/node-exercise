/**
 * Created by yairr on 24/05/2017.
 */
var request = require('request');

process.stdin.pipe(request.post('http://localhost:8099/')).pipe(process.stdout);