import fs from "fs";

const users = fs.readFile("./datas/user.json","utf8",(error,users)=>{
    if(error) return error

    console.log(users)
})