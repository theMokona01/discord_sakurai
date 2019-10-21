exports.run = (bot, message, Discord, prefix) => {
  
  var color = 0x9370DB
  
if(message.author.id == '373348135205863425'){
  let messagecount = parseInt(1);
message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));
  
  let msg = message.content.split(" ")
  if(msg[1] == 'general' || msg[1] == 'g'){
    
    var rules = new Discord.RichEmbed()

        .setImage('https://i.ibb.co/J5w5HtX/rules-welcome.gif')
        .setColor(color)
            
        message.channel.sendEmbed(rules)
   
        .then(msg => {
            var rules = new Discord.RichEmbed()

        .setDescription("**GENERAL**\n\n:one: No spamming. This includes excessive caps, constant line splitting, sending same message content repeatedly in a short time span, loud/obnoxious noises in voice, @mention spam & image spam.\n\n:two: No trolling. This includes impersonation, raiding, etc & will result in punishment.\n\n:three: General civil discussion is welcome, serious arguments take them to DMs. Certain topics such as politics & religion are not permitted.\n\n:four: Advertising without the permission of staff will result in punishment. DM advertisement is included too.\n\n:five: Respect other members, this includes their opinions, beliefs, etc. Continuous insults or disrespect will not be tolerated.\n\n:six: NSFW content is strictly forbidden. This includes no gore, sexual, scary content, screamer links, porn, nudity, death, etc.\n\n:seven: Do not start or participate in drama, keep it to DMs. If you have issues with someone causing drama please contact a staff member to address the situation.\n\n:eight: Respect the staff team. They voluntarily spend time on this server to moderate, host events, create new artwork, etc.\n\n:nine: Use common sense. This means no derogatory terms, racial slurs, sexual harassment, etc.")
        .setColor(color)
            
        message.channel.sendEmbed(rules);
    })
            .then(msg => {
            var rules = new Discord.RichEmbed()
           .setDescription(":one::zero: Don’t push the rules. The 'how far can I go?' game is not allowed & staff have the rights to punish you.\n\n:one::one: Don’t ping staff roles unless staff is immediately needed for a serious matter.\n\n:one::two: Abide by the topic of each channel.\n\n:one::three: While special characters in usernames are allowed, usernames that are very difficult to tag are not. Also if you wish to change your nickname, leave something similar to your username so other members recognize you better.\n\n:one::four: You are only allowed to have only one account on this server. If you are found to have alts to bypass infractions/bans or cheating in certain games, specific measures will be taken to restrict their access to the server.\n\n:one::five: There may be situations not covered by the rules or times where the rule may not fit the situation. If this happens the moderators are trusted to handle the situation appropriately this may include the member getting a warning or a ban.\n\n:one::six: Follow Discord’s community guidelines & ToS. Those caught violating any of these terms will be punished as seen fit.")

        .setColor(color)
            
        message.channel.sendEmbed(rules);
    })      .then(msg => {
            var rules = new Discord.RichEmbed()
        .setDescription("**DISCORD ToS & GUIDELINES:**\n\n**- Terms of Service:** https://discordapp.com/terms\n**- Community guidelines:** https://discordapp.com/guidelines")
       
        .setColor(color)
            
        message.channel.sendEmbed(rules);
    })
     .then(msg => {
            var rules = new Discord.RichEmbed()

        .setDescription("**VOICE CHAT**\n\n:one:  Do not surf between voice channels repeatedly.\n\n:two:   Do not play earrape unless most people consent.\n\n:three:  Reduce the amount of background noise, if possible.\n\n:four:  Moderators reserve the right to disconnect, mute, deafen, or move members to & from voice channels.\n\n:five: Use <#591207979894833162> channel for typing music commands.")
        .setColor(color)
            
        message.channel.sendEmbed(rules);
    })
        
        .then(msg => {
            var actions = new Discord.RichEmbed()

            .setDescription(" :diamonds: **ACTIONS** :diamonds:\n\n:x:  Continuous offense or excessive rule violations will result in **mutes** & **tempbans**.\n\n•  **1 infraction** = 15 min mute\n•  **2 infractions** = 30 min mute\n•  **3 infractions** = 1 week tempban\n• **5 infractions** = permaban\n\n:x:  Joining to troll other users will result in **permaban**.\n\n:x: You will be muted if you do not comply after receiving a warning. The time of the mute will be decided by the staff member that provided the warn.")
            .setColor(color)
           
           
        message.channel.sendEmbed(actions);
    })
      .then(msg => {
            var actions = new Discord.RichEmbed()

            .setDescription(":small_blue_diamond: **OTHER** :small_blue_diamond:\n\n• Depending on severity of your infractions it may be deemed fair to accelerate or delay the tempban.\n\n• If you disagree with the decisions being made by the **Staff**, please do not try to argue about it in public as it will only serve to cause drama. Instead, get in contact with a **Master of Order** or an **Admin** with details of your complaint.\n\n• Refrain from sharing controversial topics. They typically evolve into toxic arguments so is best to avoid them.\n\n• If you were banned & would like to appeal, please get in contact with a **Master of Order** or an **Admin**. They will review the account & possess the full authority to either decline or accept the appeal conditionally.")
            .setColor(color)
           
           
        message.channel.sendEmbed(actions);
    })
    .then(msg => {
            var actions = new Discord.RichEmbed()

            .setDescription(":white_check_mark: **AGREEMENT**\n\n**If you agree with the server rules, react to this message to see the rest of the channels.**")
            .setColor(color)
           
           
        message.channel.sendEmbed(actions).then(function (messageR) {
              messageR.react('622943298037874695')
           
           

            }).catch(function() {
              console.log('err')
             });
    })
}
  

   
    
    
  
  else if(msg[1] == 'tourney' || msg[1] == 't'){
      
var tourneyRules = new Discord.RichEmbed()
        .setTitle("<a:smashball:548286037143584768>   SMASH VILLAGE TOURNAMENT RULES   <a:smashball:548286037143584768> ")
        .setDescription("\n__**Ⅰ. General:**__\n\n➣ Double Elimination\n➣ Best out of 3 (Semifinal/Loser's Final & Grand Final is best out of 5)\n    ➣ Loser's side must take two sets in Grand Finals.\n➣ 3 stock, 8 minutes\n➣ Items: ***OFF***\n➣ FSM: ***OFF***\n➣ Spirits: ***OFF***\n➣ Stage Hazards: ***OFF***\n➣ Team Attack: ***ON***\n➣ Mii Fighter: *All moveset combinations are legal*\n➣ If time runs out, winner is determined by remaining **stock** & **damage** dealt.\n\n__**Ⅱ. Stage Picking:**__\n\n∙ A coin is flipped using `/flipcoin` command & from the **Neutral Stages** list, the winner of coin flip bans a stage, after this loser bans two stages, then winner bans one last stage. The remaining stage is used as the first stage for the set.\n    ∙ After first match **any stage** can be used from the **Neutral or Counterpick Stages**. Winner of match bans two stages & loser picks a stage.\n    ∙ Dave's Stupid Rule: Same stage cannot be played twice in the same set.\n\n__**Ⅲ. Stage List:**__\n\n **Neutral Stages**\n★ Battlefield (Any form of battlefield)\n★ Final Destination (Any form of FD)\n★ Pokémon Stadium 2\n★ Smashville\n★ Lylat Cruise\n\n**Counterpick Stages**\n★ Kalos Pokémon League\n★ Town & City\n★ Unova Pokémon League\n★ Yoshi's Island (Brawl)\n★ Yoshi's Story\n\n__**Ⅳ. Other:**__\n\n✶ Your **Challonge username** must be the same as the **Discord username**, otherwise entry will be deleted.\n✶ **DQ Timer: 10 mins**. If your opponent doens't make it on time or answer any messages in 10 minutes, ping a <@&543226489659850763> & you will be placed on the next round.\n✶ Battle arenas are hosted by participants, you may use any of the tourney channels to contact your opponent.\n✶ To report winner of the set go to the current Challonge link & select the winner.\n✶ If needed, a 60 second period on the game clock is used to test connection. If the game becomes unplayable due to lag after the time limit, a <@&543226489659850763> hosts the arena & may DQ the lagger.\n")
        .setColor(0x0000FF)

        message.channel.sendEmbed(tourneyRules)
  
    
  }
  
  else if(msg[1] == 'florp' || msg[1] == 'f'){
          
var tourneyRules = new Discord.RichEmbed()
        .setTitle("<a:smashball:548286037143584768>   FLORP RULESET   <a:smashball:548286037143584768> ")
        .setDescription("**__I. General:__**\n\n➣ Stamina - 300\n➣ Stock - 7\n➣ FS Meter - On\n➣ Spirits - Off\n➣ Damage Handicap - Off\n➣ Team Attack - Off\n➣ First to - 1 Win\n➣ Stage Morph - Off\n➣ Stage Hazards - On\n➣ Launch Rate - 0.5\n ➣ Underdog Boost - Off\n➣ Pausing - On\n➣ Score Display - Off\n➣ Show Damage - No\n➣ Items - High\n\n**__II. Items:__**\n\n♢ Gust Bellows\n♢ Ramblin' Evil Mushroom\n♢ Smoke Ball\n♢ Cucco\n♢ Behive\n\n**__III. Legal Stages:__**\n\n★ Temple\n★ New Pork City\n★ The Great Cave Offensive\n★ Palutena's Temple\n\n**__IV. Stage Striking:__**\n\n∙ Stages are struck in a 1-2-1 order, meaning that after player 1 strikes, player 2 strikes, then player one picks the stage that will be played.\n∙ After game 1, The winner will ban 2 stages. The loser will then pick a stage to play on. This system of banning stages will continue until the set is over.\n\n**__V. Extra Rules:__**\n\n∙ Any sort of camping for any reason is not allowed.\n∙ Intentionally self destructing as Bayonetta during a missed final smash to gain it back quickly is disallowed.\n")
        .setColor(0x0000FF)

        message.channel.sendEmbed(tourneyRules)
  }
}
  else{
    return;
  }
}

  
