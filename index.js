const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login("OTMxNjQ0ODI4OTE0MTc2MDIw.YeHb3A.pkVkYYOWXLVFrG3N_Kte7zjNI44")

client.on("ready", () =>{
    console.log("Bot Online")
})

client.on("messageCreate", (Message) => {
    console.log(Message)
})

client.on("messageCreate", (message) => {
    if(message.content == "!ciao") {
        message.channel.send("yoo bella")
    }

    if(message.content == "!embed") {
        var embed =new Discord.MessageEmbed()
        .setTitle("📋Regolamento")
        .setDescription("leggere il regolamento in #regolamento")
        .setThumbnail("https://th.bing.com/th/id/OIP.j3MhjlQorydPwXsX5I8YFAHaHh?pid=ImgDet&rs=1")

        message.channel.send({embeds: [embed]})
    }
})

