import fs from "fs/promises"

async function getuser() {
    try {
        const user = await fs.readFile("./datas/user.json", "utf8")
        console.log(user)

        const post = await fs.readFile("./datas/post.json", "utf8")
        console.log(post)

        const comments = await fs.readFile("./datas/comments.json", "utf8")
        console.log(comments)

    } catch (error) {
        console.log(error)

    }

}

getuser()