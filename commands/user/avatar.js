exports.run = (bot, message, Discord, prefix) => {
  
  
  if (message.channel.id == "591207979894833162") {

        let user = message.mentions.users.first() || message.author;
              
        message.channel.send(new Discord.RichEmbed()
            .setTitle(user.username+ "'s profile picture")
            .setImage(user.avatarURL)
            .setFooter("Requested by: " +message.author.username)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16)));
     


    
}
  
}