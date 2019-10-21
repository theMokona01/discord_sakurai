const http = require('http');
const express = require('express');
const app = express();
const Commando = require('discord.js-commando');
const Discord = require('discord.js')
var Color = require('color');
const config = require('./.data/config.js');

const bot = new Commando.Client({
    unknownCommandResponse: false
});
const prefix = "/";

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 10000);


bot.on('guildMemberAdd', (guildMember) => {
  if(guildMember.id == "373348135205863425"){
    guildMember.addRole(guildMember.guild.roles.find(role => role.id === "580052650339467285"))
    
  }
  
  //let cFx = require(`./commands/info/welcome.js`)
 // cFx.run(bot, guildMember, Discord, prefix)
     var newMemberMsg = new Discord.RichEmbed()


  .setImage('https://i.ibb.co/7jYVLkb/imageedit-10-3098792348.gif')
  .setColor(0x9370DB)
    guildMember.sendEmbed(newMemberMsg)
  .then(msg => {
        var newMemberMsg = new Discord.RichEmbed()


  .setDescription("<a:hoes_mad:616803714140995584>   __**Thanks for joining!**__   <a:hoes_mad:616803714140995584>\n\n★ Please take a moment to read the server <#516084501357658132> & <#567111509956886548> before hoping into the other channels.\n\n★ In here, you can customize your server profile at <#567038509081427969>.\n\n★ Additionally, you can pay a visit to the <#548674427739701263> channel for role assignment.\n\n★ Don't be shy to say hi & see you in the battlefield!")
  .setColor(0x9370DB)
           
  guildMember.sendEmbed(newMemberMsg)
     })
 
  
const ch1 = bot.channels.find('id', '539272444670640134')
 let greetVerification = new Discord.RichEmbed()
    .setAuthor(guildMember.user.tag+ " joined", guildMember.user.avatarURL)
    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
    ch1.send(greetVerification );
 guildMember.addRole(guildMember.guild.roles.find(role => role.id === "578037827875373077"))

 });

bot.on('guildMemberRemove',(guildMember) => {
  const ch1 = bot.channels.find('id', '539272444670640134')
  let leaveVerification = new Discord.RichEmbed()
    .setAuthor(guildMember.user.tag+" dipped", guildMember.user.avatarURL)
    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
    ch1.send(leaveVerification );

});

// Regular message commands
bot.on('message', message =>{
  
  // confessions
  if(message.channel.type == 'dm'){

      // confessions
      let cFx = require(`./commands/confessions/confess.js`)
      cFx.run(bot, message, Discord, prefix)
      return

  }
  // regular commands
  else{
  let db_usage = false;
  if(message.author.bot) return;
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try{

      let cmdPath = ``;

      if (command === 'welcome'){
         cmdPath = `./commands/info/${command}.js`;
      }
      else if(command === 'r' || command === 't' || command === 'clean' || command === 'announcement' || command === 'faq' || command === 'bot' || command ==='reg' || command ==='selfroles'){
        cmdPath = `./commands/admin/${command}.js`;
      }

      else if(command === 'accept'){
        cmdPath = `./commands/confessions/${command}.js`;
      }
      else if(command === 'avatar' || command === 'help' || command === 'mature' || command === 'suggest'){
          cmdPath = `./commands/user/${command}.js`;
      }

      else{

        cmdPath = `./commands/${command}.js`;
      }

      if (cmdPath !== ``)
      {
          let absPath = require.resolve(cmdPath);
          console.log('clearing cache for ' + absPath);
          delete require.cache[absPath];
        
          let cFM = require(cmdPath)
          if(db_usage == true){
             cFM.run(bot, message, Discord, prefix, db)
            return
          }
          cFM.run(bot, message, Discord, prefix)
          return;
      }

    }catch (err){
        let errorMsg = err.toString();
        if(errorMsg.includes('Cannot find module')){
            errorMsg = errorMsg.split(" ");
            console.log(`Command ${errorMsg[4]} not found`);
            return
        }
  console.log(err)

    }
  }
  
}
})

bot.on('raw', event=>{
  const eventName = event.t;
  const rules = '516084501357658132';
  const self_roles = '548674427739701263';

  if(eventName === 'MESSAGE_REACTION_ADD'){
    let reactionChannel = bot.channels.get(event.d.channel_id);
    let reactionMessage = bot.channels.get(event.d.message_id);


    if(reactionChannel == "<#"+rules+">" || reactionChannel == "<#"+self_roles+">" ){

      if(reactionChannel.messages.has(event.d.message_id)){
        return;
      }
      else{
        reactionChannel.fetchMessage(event.d.message_id)
        .then(msg=>{
          let msgReaction = msg.reactions.get(event.d.emoji.name+":"+event.d.emoji.id);
          let user = bot.users.get(event.d.user_id)

          bot.emit('messageReactionAdd', msgReaction, user);

        })
        .catch(err => console.log(err));
      }
    }

  }
  else if(eventName ==='MESSAGE_REACTION_REMOVE'){
    let reactionChannel = bot.channels.get(event.d.channel_id);


     if(reactionChannel == "<#"+rules+">" || reactionChannel == "<#"+self_roles+">"){
       if(reactionChannel.messages.has(event.d.message_id)){
        return
       }
         else{
        reactionChannel.fetchMessage(event.d.message_id)
        .then(msg=>{
          let msgReaction = msg.reactions.get(event.d.emoji.name+":"+event.d.emoji.id);
          let user = bot.users.get(event.d.user_id)

          bot.emit('messageReactionRemove', msgReaction, user);

        })
        .catch(err => console.log(err));
      }

    }

  }


});

bot.on('messageReactionAdd', (messageReaction, user) => {

    if (messageReaction){
        if (messageReaction.emoji.id != null) {
            var emote_ID = messageReaction.emoji.id
            if (emote_ID == "622943298037874695") {

                // arrivals
                let cFx = require(`./commands/info/arrivals.js`)
                cFx.run(bot, messageReaction, Discord, user)
                return
            }
        }
    // handle self roles
    let cFx = require(`./commands/info/giverole.js`)
    cFx.run(bot, messageReaction, config, user, Discord)
    return
}
})


bot.on('messageReactionRemove', (messageReaction, user) =>{

    if (messageReaction) {
        let cFx = require(`./commands/info/removerole.js`)

        cFx.run(bot, messageReaction, config, user, Discord)
        return
    }
});

bot.on('ready', function(){
  bot.user.setStatus('away')
  bot.user.setPresence({
      
        game: {
            name: 'DM to post anon confession', 
        }
    });

    console.log("Ready to use")
  
});



bot.login("NTE2Njg2NzcyNjA1MDI2MzE5.XXxm8Q.3xxS6aofC1atAYLmInorSVELpP0").catch(r => console.log(r));

