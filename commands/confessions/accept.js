exports.run = (bot, message, Discord, prefix) => {
  
  if(message.member.roles.find(r => r.id === "603091894339108865") || message.author.id == "373348135205863425"){
     
    const fs = require("fs");
    const unconf = require("../../.data/confUnconfirmed.json");
    const conf = require("../../.data/confConfirmed.json");
    
    const channelid = '634886315288166400'
    const ch1 = bot.channels.find('id', channelid)
    let msgDiv = message.content.split(" ")
    
    if(msgDiv[1] == null){ return }
    
    var number = msgDiv[1]

    if(!unconf[channelid]){ return } 

    if(!conf[channelid]){
        conf[channelid] = {
        n: 1 
      };
     fs.writeFile("./.data/confConfirmed.json", JSON.stringify(conf), (err) => {
    if(err)
      console.log(err);
  });

   }
    
    let countCheck = unconf[channelid].n
    let has = false
    for(let i = 0; i < countCheck.length; i++){
      if(String(countCheck[i]) == String(number)){
        has = true
      }
    }

    if(has == true){
      console.log(number)
      let index = countCheck.indexOf(parseInt(number, 10))
      
      let content = unconf[channelid].c
      let newnumber = unconf[channelid].n
      
      let sentContent = content[index]
      
      if(sentContent == ""){
        message.react("634957626366492683")
        message.channel.send("<:brug:567043302361137167> Confession unavailable")
        return
      }
      
      content.splice(index, 1)
      newnumber.splice(index, 1)
      
      if(newnumber.length == 0){
        newnumber = [0]
        content = ['']
      }
      
      unconf[channelid].n = newnumber
      unconf[channelid].c = content
      
      fs.writeFile("./.data/confUnconfirmed.json", JSON.stringify(unconf), (err) => {
      if(err)
        console.log(err);
    });
      
      
      var confession = new Discord.RichEmbed()
  
        .setAuthor(`Confession #${conf[channelid].n}`)
        .setDescription(sentContent)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
      ch1.send(confession)
      
      
      conf[channelid].n = parseInt(conf[channelid].n, 10) + 1
      
      fs.writeFile("./.data/confConfirmed.json", JSON.stringify(conf), (err) => {
      if(err)
        console.log(err);
    });
      
       message.react('634857240603394118')
      return
      
    }
    
    message.react("634957626366492683")
    message.channel.send(" <:brug:567043302361137167> Confession unavailable")
   
    
     }
};