const fs = require('fs');

fs.readFile("file1.txt" , "utf-8" , (err , data) => {
    if(err){  console.log(err); }
       
    else {console.log (data);  }

})

const content = "Hello from Nodejs";
fs.writeFile("example.txt" , content , (err) =>{
    if(err){ console.log(err);
    return;
    }
     console.log("file created successfully")
});

fs.rename("example.txt" , "example1.txt", (err) => {
    if(err){ console.log(err);
        return;
        }
         console.log("file renamed successfully")
});

fs.stat("file1.txt" , (err ,Stats) => {
    if(err){ console.log(err) ;
        return;
    }
    console.log(Stats);
})


fs.stat("file1.txt" , (err ,Stats) => {
    if(err){ console.log(err) ;
        return;
    }
    console.log("file size", Stats.size);
    console.log("is directory", Stats.isDirectory());
})

const directoryName = "new-directory";
fs.mkdir(directoryName , (err) =>{
    if(err){ console.log(err) ;
        return;
    }
    console.log("directory created successfully");
})