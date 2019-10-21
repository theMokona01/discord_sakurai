exports.run = (bot, message, Discord, prefix) => {
  
  //TO-D0 update banners
  //30+ color roles
  //update arrivals image to a gif
  //Different colors
  //update staff roles
  
  var color = 0x9370DB
  
  if(message.author.id == '373348135205863425'){
  let messagecount = parseInt(1);
message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));
  
    
      let msg = message.content.split(" ")
  if(msg[1] == 'general' || msg[1] == 'g'){
       
  
    var faq = new Discord.RichEmbed()
//TO-DO update images
            .setImage("https://i.ibb.co/7jYVLkb/imageedit-10-3098792348.gif")
            .setColor(color)
           
           
        message.channel.sendEmbed(faq)
       
        .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("***Welcome to the Village***")
            .setDescription("We’re a chill gaming community mostly focused in Smash Ultimate & other Nintendo games. If you ever have any questions that can’t be answered here or in <#516084501357658132>, feel free to contact any staff member. Have fun & see you in the battlefield!")
            .setColor(color)
           
           
        message.channel.sendEmbed(faq)
     })
    .then(msg => {
         var faq = new Discord.RichEmbed()
        //TO-DO update images
            .setImage("https://i.ibb.co/NtpRN2z/ranks.gif")
            .setColor(color)
           
           
        message.channel.sendEmbed(faq);
     })
 

    .then(msg => {
       var faq4 = new Discord.RichEmbed()
       
       //TO-D0 add Low new roles

       .setDescription("<@&534114612904329226> - Level 1\n<@&534114542519844865> - Level 5\n<@&534115056963551263> - Level 10\n<@&606549242445824010> - Level 15\n<@&534115231732072462> - Level 20\n<@&534115439211577345> - Level 25\n<@&534115607617077263> - Level 30\n<@&534115766136471571> - Level 35\n<@&534115930511376414> - Level 40\n<@&569705870880145429> - Level 50\n<@&569703822751170593> - Level 60\n<@&569703967228035082> - Level 75\n<@&569704397572145163> - Level 90\n<@&534116117476671488> - Level 100")
       .setColor(color)
        message.channel.send(faq4)
     })
    
    
    
    .then(msg => {
         var faq = new Discord.RichEmbed()
            .setImage("https://i.ibb.co/cvprP2L/final-octopath.gif")
            .setColor(color)
           
           
        message.channel.sendEmbed(faq);
     })

    .then(msg => {
      
        let a = new Discord.RichEmbed()
        .setTitle("**Q: How do I change my name color?**")
       .setDescription("A: Go to <#548674427739701263> & react to the color you wish to obtain.")
       .setColor(color)
        message.channel.send(a)
      
     })
    .then(msg => {
         let a = new Discord.RichEmbed()
         .setTitle("**Q: How do I make a suggestion for the server?**")
       .setDescription("A: Type `/suggest your suggestion` & it will be posted <#522249812431732748> where people can react with either <:0yes:529149426770509846> or <:0no:529149671097106443> to gauge interest in it.")
       .setColor(color)
        message.channel.send(a)
     })
    
    .then(msg => {
         let a = new Discord.RichEmbed()
         .setTitle("**Q: How do I post an anonymous confession?**")
       .setDescription("A: Send it to <@516686772605026319> as DM.")
       .setColor(color)
        message.channel.send(a)
     })
   
    .then(msg => {
         let a = new Discord.RichEmbed()
         .setTitle("**Q: Can we partner with your server?**")
        .setDescription("A: Yes. More information is located at <#540745822929682446>.")
       .setColor(color)
        message.channel.send(a)
     })
  
      
     .then(msg => {
          let a = new Discord.RichEmbed()
          .setTitle("**Q: I'm a content creator, can I advertise my content?**")
        .setDescription("A: You can share your original content to others at <#521484990551293973>.")
        .setColor(color)
        message.channel.send(a)
     
     })
    
   
    /*.then(msg => {
          let a = new Discord.RichEmbed()
          .setTitle("**Q: What do the staff roles mean?**")
        .setDescription("A: Higher ups are <@&517757149053714448> (**0wner**) & <@&517331569728552988> (**Head Admin**). Staff is divided into three main categories: <@&571950383312797707> (**Moderator**), <@&543226489659850763> (**T.O, Events, Etc.**) & <@&580252318784552960> (**Art**). These roles are obtainable by <@&519354720364789768>, & the leaders of each category are known as <@&519355802541359116>.")
       .setColor(0xf4c2c2)
        message.channel.send(a)
     })*/
   

    .then(msg => {
          let a = new Discord.RichEmbed()
          .setTitle("**Q: Can I invite my friends to the server?**")
        .setDescription("A: Yes! Use this link right here!\nhttps://discord.gg/ceJrJ7A")
       .setColor(color)
        message.channel.send(a)
       
     })
    
  .then(msg => {
         var faq = new Discord.RichEmbed()
            .setImage("https://i.ibb.co/P5d1hVm/staff.gif")
            .setColor(color)
           
           
        message.channel.sendEmbed(faq);
     })
    
      .then(msg => {
          let a = new Discord.RichEmbed()
        .setDescription("**Owner**\n<@287679549448126467>\n\n**Admin**\n<@550767324714762263>\n<@313478987336908800>\n<@277645246110760972>\n\n**Master Hand**\n<@334114206192369664>\n<@394925054778933258>\n<@484441053487824916>\n<@286279945938927616>\n\n**Mod/Event Manager**\n\n<@299135222577102848>\n<@126708760520556544>\n<@192051959908270081>\n<@360981878347530263>")
       .setColor(color)
        message.channel.send(a)
     })
  }
    
    
    if(msg[1] == 'mario' || msg[1] == 'm'){
      
       var faq = new Discord.RichEmbed()

            .setImage("https://i.ibb.co/RjzvKMQ/mario-maker-2.gif")
            .setColor(0xf4c2c2)
           
           
        message.channel.sendEmbed(faq)
          .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("***Welcome to the Super Mario Maker 2 Channels!***")
            .setDescription("★ We will be hosting monthly competitions & events which will be posted in <#598542912275480593>.\n\n★ For the **competitions** you get to create your own level & then post it's level ID, level name & your discord username in <#598541141130084412>. You can only submit 1 entry per competition so choose wisely.\n\n★ For the **events** your main aim is to complete the level created by the staff or members. If you do then you will win some SVP.\n\n★ Anyone can enter including the staff. You lot will get to vote and the top 2 will win some SVP & your levels may be streamed.")
            .setColor(0xf4c2c2)
           
           
        message.channel.sendEmbed(faq);
     })
      
      
           .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("**__LEVEL DESIGN RULES__**")
            .setDescription(":one: **No hidden shortcuts.**\n\n:two: **No troll levels.**\n\n:three: **No copied/downloaded levels**\n\n:four: **Levels should not be too short or too long.**\n\n:five: **Any game style is allowed as long as it follows the theme stated.**")
            .setColor(0xf4c2c2)
           
           
        message.channel.sendEmbed(faq);
     })
      
                .then(msg => {
     var faq = new Discord.RichEmbed()

            .setDescription("★ In <#598541348680761360> we will publish who cleared the levels within the fastest time. This section will be refreshed every month & the winner will be awarded with SVP. We may ask for photographic evidence.\n\n★ The final channel <#598541520202629130> is the general chat not related to the events where you can post your level ID's so that others can play your levels & to talk about them.")
            .setColor(0xf4c2c2)
           
           
        message.channel.sendEmbed(faq);
     })
      
      
    }
    
     if(msg[1] == 'tourney' || msg[1] == 't'){
             
    var faq = new Discord.RichEmbed()
   .setImage("https://i.ibb.co/gZQz9xx/amashshs.gif")
          .setColor(color)
           
      
        message.channel.sendEmbed(faq)
        .then(msg => {
    var faq = new Discord.RichEmbed()

           
  
     .setImage("https://i.ibb.co/K0d3SWy/tourney-guide.png")
          .setColor(color)
           
       message.channel.sendEmbed(faq);
     })
        .then(msg => {
    var faq = new Discord.RichEmbed()

           
  
     .setImage("https://i.ibb.co/gZQz9xx/amashshs.gif")
          .setColor(color)
           
       message.channel.sendEmbed(faq);
     })
       
               .then(msg => {
    var faq = new Discord.RichEmbed()

           .setTitle("**MATCHMAKING**")
    
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
        
       
             .then(msg => {
    var faq = new Discord.RichEmbed()


           .setDescription("★ **Arena Channels**\n\n`/arena id pwd` - creates custom arena channel\n`/arena close` - closes arena\n`/arena` or `/arena @user` - most recent arena or user specific arena\n\n★ **Stage Striking**\n\n`/bo3 @user` - initiates stage striking with opponent for best of 3\n`/bo5 @user` - same function as bo3 but with best of 5 instead\n`/rematch` battles previous opponent again\n`/cancel` - cancels current battle\n`/battle help` - sends detailed help menu")
          .setColor(color)
    .setFooter("The commands must be used to be ranked in the leaderboards")
           
       message.channel.sendEmbed(faq);
     })
        

                  .then(msg => {
    var faq = new Discord.RichEmbed()

           .setTitle("**TOURNEYS**")
    
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
        
        
                        .then(msg => {
    var faq = new Discord.RichEmbed()
    
           .setDescription("<#608158153212821514> - registration links will be posted here\n\n<#614900409966002196> - displays seasonal rankings\n\n<#613372108956893382> - main tourney chat to contact your opponent")
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })                
   
       
          .then(msg => {
    var faq = new Discord.RichEmbed()
        
           .setDescription("★ In tourney day, use <#613372108956893382> as the main channel to contact your opponent. Then create a custom arena channel using the command & initiate the stage striking as mentioned above.")
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
                  .then(msg => {
    var faq = new Discord.RichEmbed()

           .setTitle("**CHALLONGE**")
    
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
            .then(msg => {
    var faq = new Discord.RichEmbed()
           .setTitle("Register")
           .setDescription("Login with your Challonge account & press the Sign Up button.")
           .setImage("https://i.ibb.co/9pRzVfG/challonge2.png")
           .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
             .then(msg => {
    var faq = new Discord.RichEmbed()
           .setTitle("Report winner of the set")
           .setDescription("Click the Report Your Scores button & choose the winner of the set.")
           .setImage("https://i.ibb.co/tDRgB24/challonge3.png")
           .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
             .then(msg => {
    var faq = new Discord.RichEmbed()
           .setTitle("Unregister")
           .setDescription("Go to Your Settings tab & click on Unregister.")
           .setImage("https://i.ibb.co/X3CgfWZ/challonge.png")
           .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
          
                  .then(msg => {
    var faq = new Discord.RichEmbed()

           .setTitle("**RULESET**")
    
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
              .then(msg => {
    var faq = new Discord.RichEmbed()
          .setTitle("Detailed Version")
           .setDescription("https://docs.google.com/document/d/1zpRdSe50H9Z0e2lU_-XGlTWTtpTRGhJ-jgaaAcLPsGw/edit?usp=sharing")
          .setColor(color)
           
           
       message.channel.sendEmbed(faq);
     })
       
                               .then(msg => {
    var faq = new Discord.RichEmbed()
    .setTitle("Shortened Version")
    .setImage("https://i.ibb.co/SPcLJ1s/image0.jpg")
          .setColor(color)
           
           
        message.channel.sendEmbed(faq)
     })
     }
     
    
    
    
    
      if(msg[1] == 'smash' || msg[1] == 's'){
        
        
    var faq = new Discord.RichEmbed()

            .setImage("https://i.ibb.co/QH0Mq0K/imageedit-7-2250740334.gif")
          .setColor(0xB22222)
           
           
        message.channel.sendEmbed(faq)

              .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("***Welcome to Smash Village's Matchmaking!***")
            .setDescription("In here you can find all the necessary information about the SSBU category. Learn how to register arenas, challenge other players to acquire higher ranks & how to participate in server tournaments, see the leaderboards, etc.")
          .setColor(0xB22222)
           
           
        message.channel.sendEmbed(faq);
     })
        
         .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("**__MATCHMAKING__**")
            .setDescription("★ In Smash Village you can **__notify other players__** to battle by mentioning the <@&561565950000758797> role in <#522249780261421086> channel. To get notified, go to <#548674427739701263> & select the role.\n\n★ Here you can **__register arena codes__** easier for other members to join.\n\n• **Register battle arena:** `/arena [id] [pwd]`\n• **Search battle arena:** `/arena`   or   `/arena @user`\n• **Close battle arena:** `/arena clear`\n\n★ Additionally, you can **__challenge other members__** to register your wins in the server & acquire special ranks.\n\n• **Challenge a member:** `/challenge @user`\n• **Report win:** `/winner @user`\n• **Confirm win:** `/confirm`\n• **Rematch user:** `/rematch`\n• **Check total wins:** `/wins` or `/wins @user` ")
            .setFooter("For a more detailed explanation & list of rewards for challenges, type /challenge help.")
           .setColor(0xB22222)
           
           
        message.channel.sendEmbed(faq);
     })
                 .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("**__MENTOR PROGRAM__**")
            .setDescription("★ You can apply to be an official server mentor to help coach other players in their specific needs. List of mentors is available at <#592232736836550666> channel.\n\n★ To apply for the <@&592232257901690929> program you must meet at least one of these two requirements:\n\n1. Place top 3 in a **Smash Village** tourney.\n2. Obtain the <@&516071302583549962>, <@&540727851549196329> & <@&561731069767057430> roles.\n\n★ If you meet any of these two requirements, please fill out the form below to be tested for the role.")
            .addField("Application Form:", "https://forms.gle/gwTtA93HiAzhqVvM8")
          .setColor(0xB22222)
           
           
        message.channel.sendEmbed(faq);
     })
                 .then(msg => {
     var faq = new Discord.RichEmbed()

            .setTitle("**__TOURNAMENTS__**")
            .setDescription("★ Here we host both competitive & casual tournaments for everyone to participate. They are generally announced at <#522456846489878548>, to get notified go to <#548674427739701263> channel & select the <@&545642179272376335> role.\n\n★ Casual tourneys always vary, while competitive tourneys are divided by seasons. A season consists of four ranked tourneys, where members compete & get ranked on the leaderboards. At the end of the season, a special championship with prizes will be streamed with the Top 16 ranked players.\n\n• **Check season stats:** `/rank` or `/rank @user`")
         .addField("Seasonal Rankings:", "https://docs.google.com/document/d/1iFuBThkMW3brVJ0Y36uTktK-BSn3y4ab6w5t7fxiWKo/edit?usp=sharing")
            .addField("Official Tourney Rule Set:", "https://docs.google.com/document/d/1zpRdSe50H9Z0e2lU_-XGlTWTtpTRGhJ-jgaaAcLPsGw/edit?usp=sharing")
        
     .setImage("https://i.ibb.co/SPcLJ1s/image0.jpg")
            .setColor(0xB22222)
           
           
        message.channel.sendEmbed(faq);
     })

        
      }
    
  }
  
}