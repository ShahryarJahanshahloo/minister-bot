const fs = require("fs")

function random_quote() {
    const text = fs.readFileSync("../assets/txt/quotes.txt", "utf-8")
    const quotes = text.split("\r\n")
    const randomIndex = Math.floor(Math.random() * (quotes.length - 1))
    return quotes[randomIndex]
}

module.exports = {
    random_quote,
}