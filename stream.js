const fs = require("fs");

const readStream = fs.createReadStream("./docs/blogs2.txt",{encoding:'utf-8'});
const writeStream = fs.createWriteStream("./docs/blogs3.txt");

// readStream.on("data",(chunk) => {
//     console.log("--- New Chunk ---");
//     console.log(chunk.toString());
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);