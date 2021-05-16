const Discord = require("discord.js")
const { create_caption } = require("./src/create-caption")
const { make_appoitment } = require("./src/picture-creator")
const client = new Discord.client()

client.on("ready", () => {
    console.log("ready!");
})

client.on("message", (msg) => {
    if (msg.content.startsWith("cs darim ")) {

        const time = msg.content.slice(msg.content.indexOf("m") + 2)
        const caption = create_caption(time)
        make_appoitment(caption)
        msg.channel.send(new Discord.Attachment('./assets/pics/csgo.jpg', 'csgo.jpg'))
            .then((message) => {
                message.react("@Alineo @Heydar")
            })
            
    }
})

client.login(process.env.TOKEN)