import fs from "fs/promises"

fs.readFile("./datas/user.json", "utf8")
    .then((users) => {
        console.log(users)

        return fs.readFile("./datas/post.json", "utf8")
    })

    .then((posts) => {
        console.log(posts)
        return fs.readFile("./datas/comments.json", "utf8")

    })

    .then((comments) => {
        console.log(comments)
    })

    .catch((error) => {
        console.log(error)
    })

    