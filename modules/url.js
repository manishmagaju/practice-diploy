import url from "url";

const codeItUrl = "https://codeit.com.np/popular-courses?q=mern+stack"

const codeit = new URL(codeItUrl)


codeit.searchParams.set("p","php js")
codeit.searchParams.append("year","2025")

console.log(codeit)



