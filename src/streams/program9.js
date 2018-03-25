/**
 * Created by yairr on 24/05/2017.
 */
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n');
