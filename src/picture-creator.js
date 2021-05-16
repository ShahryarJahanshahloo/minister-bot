const Jimp = require("jimp")
const { random_quote } = require("./random-quote")

async function make_appoitment(caption) {

    const image = await Jimp.read("../assets/pics/rawcsgo.jpg")
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE)
    image.print(font, 1400, 500, caption)
    image.print(font, 1200, 500, random_quote()).write("../assets/pics/csgo.jpg")

}

module.exports = {
    make_appoitment
}
