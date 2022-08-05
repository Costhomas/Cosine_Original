
const Discord = require("discord.js")

const TOKEN = "MTAwNDkwOTg4NTI1Njg5NjY2Mg.GsWHl9.B5ATe08-hZ-yUIJLvCYgBU1v2DTNlCsSE-kJz0"

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}`)
})

/*client.on("messageCreate" , (message) => {
    if (message.content == "hi"){
        message.reply("Hello world!")
    }
})
*/
/*
client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})
*/

client.login(TOKEN)

		