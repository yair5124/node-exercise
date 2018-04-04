var totBuffer;
process.stdin.on('data', function(d) {
    totBuffer = totBuffer ? Buffer.concat([totBuffer, d]) : Buffer.from(d);
}).on('end', function() {
    console.log(totBuffer);
});