require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (msg) => {
  const arancinis = ["arancino", "Arancino"];
  arancinis.map((arancino) => {
    if (msg.content.includes(arancino)) {
      msg.channel.send("ARANCINA", {
        files: [
          "https://media.discordapp.net/attachments/857173298059804676/857258116827316234/IMG_20210623_154651.jpg?width=522&height=522",
        ],
      });
    }
  });
});

client.login(process.env.BOT_TOKEN);
