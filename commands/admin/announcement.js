exports.run = (bot, message, Discord, prefix) => {
  
if(message.author.id == '373348135205863425'){
  let messagecount = parseInt(1);
message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));
  
  let announcement = new Discord.RichEmbed()
  .setTitle('<:piranhaPlant:534729979771093019>  PLANT GANG RISE UP  <:piranhaPlant:534729979771093019>')
  .setDescription("<@350424528859430912> will be hosting an event this Saturday! \nIt will be at 4:00PM AST (3:00PM EST)! \nThis event will be a bit special because this concern those rules below : \n- 1 vs 1\n- FS meter ON\n- ***PIRANHA PLANT ONLY***\nRest of rules can be found at <#522937428860862464> .\n\nTo participate, do the following command: /register\nTo exit the event, do the following command: /exit\n\nWe listened to your feedback so now battle arenas will be hosted by participants and brackets will progress faster. Details about how to report winners will be later announced at <#516067270846447627>.\n\n :warning: If you are registered and don't make it on time or answer any messages, you will be automatically disqualified and we will move on to other matches.\n\nIf you have any question, feel free to ask in <#516062357370175519>. Hope you're all having a great time and don't forget to bite your opponent to death !")
  .setImage('https://i.ibb.co/bz96MPX/tournament.jpg')
  message.channel.send(announcement)
  
  
}
  
  
}