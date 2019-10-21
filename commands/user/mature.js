exports.run = (bot, message, Discord, prefix) => {

  var msgDiv = message.content.split(" ");

   
  
  if(msgDiv[1]  == "off"){
    message.guild.channels.find('id', '549755925808807938').overwritePermissions(message.author.id, { //first you pass the id OR the member OR the user OR a role
  VIEW_CHANNEL: false, //you set the perms that you want to overwrite
  SEND_MESSAGES: false,
  READ_MESSAGES: false,
  READ_MESSAGE_HISTORY: false,
  ATTACH_FILES: false,
  EMBED_LINKS: false,
  MENTION_EVERYONE: false,
  ADD_REACTIONS: false
      });
   let embed3 = new Discord.RichEmbed()
         .setDescription("<#549755925808807938> channel access revoked.")
         .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
         message.channel.send(embed3)
return;
  }

       message.guild.channels.find('id', '549755925808807938').overwritePermissions(message.author.id, { //first you pass the id OR the member OR the user OR a role
  VIEW_CHANNEL: true, //you set the perms that you want to overwrite
  SEND_MESSAGES: true,
  READ_MESSAGES: true,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: true,
  EMBED_LINKS: true,
  MENTION_EVERYONE: false,
  ADD_REACTIONS: true,
  USE_EXTERNAL_EMOJIS: true
});
  
   let embed = new Discord.RichEmbed()
         .setDescription("Please check your PMs!")
         .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
         message.channel.send(embed)
 var user = message.author.id;
    
   let embed2 = new Discord.RichEmbed()
         .setDescription("<a:smashball:548286037143584768> **Welcome to Smash Village's After Hours** <a:smashball:548286037143584768>\n\n• These set of rules ***must*** be followed at all times:\n\n:one: Do not share content glorifying or promoting, in general, self-harm,rape, gore, suicide and death.\n\n:two: Beastiality, child porn (includes shotacon & lolicon), vore is prohibited.\n\n:three: NSFW content should only be posted here. If such content is posted anywhere else, there will be one warn & then ban if done again.\n\n:four: No illegal NSFW or content going against Discord ToS.\n\n:five: All other rules listed in the rules section also apply here.\n\n★ **With that being said, you may exit this channel at any time by typing** `/mature off`.")
         .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
         message.author.send(embed2)
  

  }

