 exports.run = (bot, message, Discord, prefix) => {  

    let messagecount = parseInt(1);
message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));


    let userN = message.author
    var userMsg = message.content
    let cmd = '/suggest'
    var args = message.content.slice(cmd.length).trim()

   
   
    var msgDiv = userMsg.split(" ")
 
    const ch1 = bot.channels.find('id', '522249812431732748')
  
    
   
    if(msgDiv[1] == null || msgDiv[2] == null){
         return;
       }
   
  
   var suggestion = new Discord.RichEmbed()
  
        .setAuthor("Suggestion from "+message.author.username, message.author.avatarURL)
        .setDescription(args +"\n\n★ **Share your opinion in:**  <#548701964008030218> **!**")
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
   
 // message.channel.send(suggestion)
 ch1.send(suggestion)
    .then(function (messageR) {
              messageR.react('529149426770509846')
           
           
         .then(msg => {
  messageR.react('529149671097106443')
    })
          
            }).catch(function() {
              console.log('err')
             });

        var conf = new Discord.RichEmbed()

        .setDescription("I posted your suggestion!")
       
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
   
  message.channel.send(conf)
                         
   
    
   
        }