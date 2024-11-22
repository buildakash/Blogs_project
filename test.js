setTimeout(() =>{
    console.log("Timeout");
    clearInterval(interval);
},3000)

 const interval = setInterval(()=>{
    console.log("TimeInterval")
 },1000)