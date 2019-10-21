exports.run = (bot, message, Discord, prefix) => {
  
   const fs = require("fs");
   var  msgDiv = message.content.split(" ");

  if(message.author.id == '550767324714762263' || message.author.id == '373348135205863425' || message.author.id == '277645246110760972'){
    
        //let user = message.mentions.users.first() || message.author;
      
        let deletionImage = "https://cdn.discordapp.com/attachments/558428664430198818/577738514138005504/Thanos-Snap-1552933559.gif";
    
        let deletion = new Discord.RichEmbed()
          .setDescription("** half of the server members ** have been deleted from existence")
          .setFooter("• React with 'F' to pay respects")
          .setImage(deletionImage)
          .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        
       message.channel.send(deletion)
         .then(function (messageR) {
           messageR.react('568581527005298708')
        })
         .catch(function(err) {
             console.log('err ' + err);
       });
   }
};