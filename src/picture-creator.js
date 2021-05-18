const Jimp = require("jimp")
const { random_quote } = require("./random-quote")

async function make_appoitment(caption) {
    try {
        const image = await Jimp.read("./assets/pics/rawcsgo.jpg")
        const font = await Jimp.loadFont("./assets/fonts/font.fnt")
        image.print(font, 1150, 160, caption)
        image.print(font, 1150, 90, random_quote()).write("./assets/pics/csgo.jpg")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    make_appoitment
}
