const fs = require("fs");

//reading file
// fs.readFile("./docs/blogs.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);//bufer
// console.log(data.toString());
// });

//writing file
// fs.writeFile("./docs/blogs.txt", "Hello Students" ,()=>{
//     console.log("File was written")
// })
// fs.writeFile("./docs/blogs1.txt", "Hello Students again" ,()=>{
//     console.log("File was written")
// })

//directory
// fs.mkdir("./assets", (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder created (directory)")
// })

// if(!fs.existsSync('./assets')){
//     fs.mkdir("./assets", (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder created (directory)")
//     })
// }
// else {
//     fs.rmdir('./assets', (err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder Deleted")
//     })
// }

//deleting file
if( fs.existsSync('./docs/deltxt.txt')){
    fs.unlink('./docs/deltxt.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log("File Deleted")
    })
}

