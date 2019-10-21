exports.run = (bot, messageReaction, config, user, Discord) => {

    if (messageReaction.message.channel.id == "548674427739701263") {
        var Color = require('color');
        var emote_ID = messageReaction.emoji.id;
        var emote_name = messageReaction.emoji.name


        var member = messageReaction.message.guild.members.find(member => member.id === user.id)
        const grey_role = "599649048248582155"
        var msg = new Discord.RichEmbed()
        if (member) {

            if (emote_ID) {

                item = config.SELF_ROLES.find(c => c.emote == emote_ID);

                if (item) {

                    let role = messageReaction.message.guild.roles.find(role => role.id === item.id)
                    member.addRole(role)

                    if (emote_ID == '570793766894567435') {

                        msg.setTitle("After Hours Rules <:paluShh:567413640328642568>")
                        msg.setDescription(":one: Do not share content glorifying or promoting, in general, self-harm,rape, gore, suicide and death.\n\n:two: Beastiality, child porn (includes shotacon & lolicon), vore is prohibited.\n\n:three: NSFW content should only be posted here. If such content is posted anywhere else, there will be one warn & then ban if done again.\n\n:four: No illegal NSFW or content going against Discord ToS.\n\n:five: All other rules listed in the rules section also apply here.")
                    } else if (emote_ID == '634589415242727426') {
                        msg.setTitle("Mudamaid Rules <:paluTea:567413608699658280>")
                        msg.setDescription(":one: Be mature inside the channel\n\n:two: No fighting / no drama over the claims.\n\n:three: If you didn't get your wish, sucks to suck.")

                    } else {

                        msg.setTitle("Succesfully assigned " + item.name + " role in **The Village**!")
                    }
                    msg.setColor(0xffff00);
                    user.send(msg);

                    console.log('Assigned new role to ' + user.tag)
                    return;


                }


            }
            if (emote_name) {
                let item = config.COLOR_ROLES.find(c => c.emote == emote_name);
                if (item) {
                    let keys = Array.from(member.roles.keys());
                    //// remove n/a Color if applicable
                    for (let x = 0; x < keys.length; x++) {
                        if (keys[x] == grey_role) {
                            let c_role = messageReaction.message.guild.roles.find(role => role.id === grey_role)
                            member.removeRole(c_role)
                        }
                    }
                    //// remove prev color role
                    for (let x = 0; x < keys.length; x++) {
                        let current = config.COLOR_ROLES.find(c => c.id == keys[x])
                        if (current) {
                            if (current.id == keys[x]) {
                                let c_role = messageReaction.message.guild.roles.find(role => role.id === current.id)
                                member.removeRole(c_role)
                            }
                        }
                    }
                    //add role
                    let role = messageReaction.message.guild.roles.find(role => role.id === item.id)
                    member.addRole(role)
                    //send private dm confirming
                    try {

                        var requestedColor = Color(item.name).hsl();
                    } catch (err) {
                        requestedColor = Color('#07E0DA').hsl();
                    }
                    msg.setTitle("Succesfully assigned " + item.name + " role in **The Village**!")
                    msg.setColor(requestedColor.hex());
                    user.send(msg);
                    console.log('Assigned new role to ' + user.tag)
                    return;
                }
            }

        }
    }
}