const Discord = require("discord.js"); 

const TOKEN = "NDY5MjEzMDI2OTI3NzcxNjUz.DjEcTg.qK9b_AjqiMuK88RUGkkQARetUF8"

var bot = new Discord.Client();

bot.on("ready", function() {
console.log("ready");
}); 

bot.on("message", function(message)  {
    if (message.author.equals(bot.user))return;

    if (message.content == "ghelp") {
        message.channel.sendMessage("This function is currently in development");

    }    
});

bot.on("message", function(message)  {
    if (message.author.equals(bot.user))return;

    if (message.content == "gping") {
        message.channel.sendMessage("pong");

    }    
});

bot.on("message", function(message)  {
    if (message.author.equals(bot.user))return;

    if (message.content == "ginvite") {
        message.channel.sendMessage(" Invite me to your server: https://discordapp.com/oauth2/authorize?client_id=469213026927771653&scope=bot&permissions=1");

    }  
});

bot.on("message", function(message)  {
    if (message.author.equals(bot.user))return;

    if (message.content == "gserver") {
        message.channel.sendMessage("GallaBot Support Server: https://discord.gg/eSvhErR");

    }    
});

bot.on("message", function(message)  {
    if (message.author.equals(bot.user))return;

    if (message.content == "gtest") {
        message.channel.sendMessage("GallaBot is online"); 

    }    
});

bot.login(TOKEN);