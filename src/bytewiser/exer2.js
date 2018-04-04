const buf = Buffer.from(process.argv.slice(2));
console.log(buf.toString('hex'));