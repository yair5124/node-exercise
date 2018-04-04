process.stdin.on('data', function(d) {
    var arr = new Uint8Array(d);
    console.log(JSON.stringify(arr));
}).on('end', function() {});