import path from "path";

const pathlist ="codeit/courses/manish/video.mp4";

//basename
console.log(path.basename(pathlist))

//dirname
console.log(path.dirname(pathlist))

//ext name 
console.log(path.extname(pathlist))

//parse
console.log(path.parse(pathlist))