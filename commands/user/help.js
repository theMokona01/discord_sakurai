exports.run = (bot, message, Discord, prefix) => {


if(message.member.hasPermission("ADMINISTRATOR")){
  
   let messagecount = parseInt(1);
message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));
  
  
  message.channel.send('https://i.ibb.co/sbTJtL8/bots.jpg') 
    .then(msg => {
        message.channel.send('https://i.ibb.co/4jv15QY/sakurai.jpg')
     })
        .then(msg => {
     var faq = new Discord.RichEmbed()

            .setDescription("`/register` ・❯ Registers for an upcoming tournament.\n`/exit` ・❯ Forfeits from a tournament.\n`/challenge [@user]` ・❯ Challenges another member.\n`/cancel` ・❯ Resets challenge.\n`/winner [@user]` ・❯ Announces challenge winner. Both challengers must type this command to validate\n`/tags` ・❯ Displays user tags from won challenges.\n`/report [@user] [reason]` ・❯ Reports another member.")
            .setColor(0x39FF14)
           
           
        message.channel.sendEmbed(faq);
     })
    .then(msg => {
        message.channel.send('https://i.ibb.co/QcPL2Jy/palutena.jpg')
     })
    .then(msg => {
        var faq1 = new Discord.RichEmbed()
        .setDescription("`/main [character]`  ・❯  Sets your main.\n`/secondary [character]` ・❯  Sets your secondary.\n`/pocket [character]` ・❯  Sets your pocket.\n`/fc [XXXX-XXXX-XXXX]` ・❯  Sets your Nintendo Switch friend code.\n`/region [number]` ・❯  Sets your region.\n`/favorite [number]` ・❯  Sets your favorite videogame franchise.\n`/profile` ・❯  Displays your profile.\n`/suggest [your suggestion]` ・❯  Makes a suggestion for the server.")
              .setColor(0x9932CC)
        message.channel.send(faq1)
     })
  
  
  
  
  
  
}  
}