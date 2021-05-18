const Discord = require("discord.js")
const { create_caption } = require("./src/create-caption")
const { make_appoitment } = require("./src/picture-creator")
const client = new Discord.Client()

client.on("ready", () => {
    console.log("ready!");
})

client.on("message", async (msg) => {
    const isValidUser = ["Shahryar.JL", "Alineo", "heydar"].includes(msg.author.username)
    if (msg.content.startsWith("cs darim ") && isValidUser) {
        try {
            const time = msg.content.slice(msg.content.indexOf("m") + 2)
            const caption = create_caption(time)
            await make_appoitment(caption)
            const message = await msg.channel.send({
                files: [{
                    attachment: "./assets/pics/csgo.jpg",
                    name: 'csgo.jpg'
                }]
            })
            await message.channel.send('<@&844111348057112587>')
        } catch (error) {
            console.log(error)
        }
    }
})

client.login(process.env.TOKEN)