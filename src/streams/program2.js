/**
 * Created by yairr on 24/05/2017.
 */
var fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);