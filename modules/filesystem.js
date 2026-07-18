import fs, { readFileSync } from "fs"

// const result = readFileSync("./datas/data.txt","utf8")
// console.log(result)

// const photos = readFileSync("./assets/images/image.png","base64");
// console.log(photos)

// fs.writeFileSync("./text/manish.txt","this is write")

// fs.appendFileSync("./text/manish.txt", "/n this is appended text")

fs.readFile("./text/manish.txt","utf8",(error,data)=>{
if(error){
    console.log(error)
    return
}else
console.log(data)
})

fs.appendFile("./text/monika.txt","hello this is appended one",(error,data)=>{
    if(error){
        console.log(error)
        return
    }
    console.log("this is appended one")
})

fs.rm("./text/monika.txt",(ERROR)=>{
    if(ERROR){
        console.log(ERROR)
    }
    console.log("succesfully deleted")
})