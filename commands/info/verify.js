const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "verify",
  aliases: ["Verify", "v"],
  description: "Verify Command!",
  usage: "Verify",
  run: async (client, message, args) => {
    if (message.channel.id !== "767388710970589206") {
      // If the channel it wasn't verification channel, ignore it. 767388710773325833
      return;
    }

    message.delete();

    message.member.roles.add("767388710781452322"); // Member role.
    message.member.roles.add("767388710773325833"); // Member role.

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${client.user.username} You Have Verifyed!`)
      .setDescription(`You have Full Access To The Server!!`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    return message.channel
      .send(embed)
      .then(msg => msg.delete({ timeout: 10000 }));
  }
};
