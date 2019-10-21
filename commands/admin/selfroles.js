exports.run = (bot, message, Discord, prefix) => {
  if(message.author.id == '373348135205863425'){
  let messagecount = parseInt(1);
message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));
    let config = require('../../.data/config.js');
 
    var color = 0x9370DB
    
      function react(json, title, flag) {
          var msg = '';
          var counter = 0;


          for (var key in json) {
              let object = json[key];
              msg = msg + object.emote + " : ** " + object.name + "**\n";
              if (counter >= flag) {

                  let embed = new Discord.RichEmbed()
                      .setTitle(`**React to pick a ${title}:**`)
                      .setDescription(msg)
                      .setColor(color);
                  message.channel.send(embed)

                  counter = 0;
                  msg = ''

              }
              counter++

          }
      }
     var roles = new Discord.RichEmbed()

            .setImage("https://i.ibb.co/JCvSZKt/sothis.gif")
            .setColor(color)
           
        message.channel.sendEmbed(roles)

     .then(msg => {
 

            var roles = new Discord.RichEmbed()

           
            .setTitle("**GENERAL**")
            .setColor(color)
           
        message.channel.sendEmbed(roles)
          
     })
       
    
  
      .then(msg => {
     var roles = new Discord.RichEmbed()

            .setTitle("**Tourneys**")
            .setDescription("Here both competitive & casual Smash Ultimate tournaments are hosted for everyone to join. Casual tourneys always vary, while competitve tourneys are ranked & divided by seasons, top players from each season compete on a special championship with streams & prizes.")
            .setFooter("If you wish to be notified for '@Tourneys', react to this message.")
            .setColor(color)
                  
        message.channel.sendEmbed(roles)
          .then(function (messageR) {
              messageR.react('586240388055171113')
          
     })
        })
       .then(msg => {
     var roles = new Discord.RichEmbed()

            .setTitle("**Events**")
            .setDescription("Fun events which includes other Nintendo games, Design Ultimate (Art Contest), Trivia Night, game nights or anything else hosted by staff members for the community.")
            .setFooter("If you wish to be notified for '@Events', react to this message.")
            .setColor(color)
                  
        message.channel.sendEmbed(roles)
          .then(function (messageR) {
              messageR.react('581000805516050452')
        
     })
        })
     .then(msg => {
     var roles = new Discord.RichEmbed()

              .setTitle("**Matchmaking+**")
            .setDescription("Exclusively made to find games easier in <#522249780261421086>. Get notified when other members are looking for a challenge in Smash Ultimate.")
            .setFooter("If you wish to be notified for '@Matchmaking+', react to this message.")
            .setColor(color)
                  
        message.channel.sendEmbed(roles)
          .then(function (messageR) {
              messageR.react('598773881691570176')
     })
      })
    .then(msg => {
     var roles = new Discord.RichEmbed()

            .setTitle("**Other Games**")
            .setDescription("Ping role to mention members in <#604403835368112168> to play other games.")
            .setFooter("If you wish to be notified for '@Other Games', react to this message.")
            .setColor(color)
                  
        message.channel.sendEmbed(roles)
            .then(function (messageR) {
              messageR.react('634836426906927106')
        })
     })
        
        .then(msg => {
     var roles = new Discord.RichEmbed()

            .setTitle("**After Hours**")
            .setDescription("Access to NSFW content. Must follow channel rules at all times.")
            .setFooter("If you wish to enter '#after-hours', react to this message.")
            .setColor(color)
                  
        message.channel.sendEmbed(roles)
            .then(function (messageR) {
              messageR.react('570793766894567435')
        })
     })
     
    .then(msg => {
     var roles = new Discord.RichEmbed()

            .setTitle("**Mudamaid**")
            .setDescription("Access to Waifu Claim. When you enter the channel you must agree to some rules or else will be kicked from the channel.")
            .setFooter("If you wish to enter '#mudae-roll', react to this message.")
            .setColor(color)
                  
        message.channel.sendEmbed(roles)
            .then(function (messageR) {
              messageR.react('634589415242727426')
        })
     })
    
       
       .then(msg => {

       var roles = new Discord.RichEmbed()

            .setTitle("**COLORS**")
            .setColor(color)
           
           
        message.channel.sendEmbed(roles)
     })
    	
        .then(msg => {


       react(config.COLOR_ROLES, 'color', 7);

     })

            .then(msg => {

                var roles = new Discord.RichEmbed()

                    .setTitle("**GAMING**")
                    .setColor(color)


                message.channel.sendEmbed(roles)
            })

            .then(msg => {

                react(config.CONSOLE_ROLES, 'gaming console', 5);
            })



  }
}      