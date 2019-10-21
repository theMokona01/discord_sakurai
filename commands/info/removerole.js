exports.run = (bot, messageReaction, config, user, Discord) => {

    if (messageReaction.message.channel.id == "548674427739701263") {


    var Color = require('color');
    var emote_name = messageReaction.emoji.name
    var emote_id = messageReaction.emoji.id
    let member = messageReaction.message.guild.members.find(member => member.id === user.id)
    let greyRole = "599649048248582155"
    let keys = Array.from( member.roles.keys() );
    let msg = new Discord.RichEmbed()

    if(member) {
        if (emote_name) {

            let item = config.COLOR_ROLES.find(c => c.emote == emote_name);
            ///////////
            //COLOR ROLES
            //////////////
            if (item) {
                let hasPrevRole = false
                for (let x = 0; x < keys.length; x++) {
                    let current = config.COLOR_ROLES.find(c => c.id == keys[x])
                    if (current) {
                        hasPrevRole = true
                    }
                }
                if (hasPrevRole == true) {

                    //// remove prev color role
                    for (let x = 0; x < keys.length; x++) {
                        let current = config.COLOR_ROLES.find(c => c.id == keys[x])
                        if (current) {
                            if (current.id == keys[x]) {
                                let c_role = messageReaction.message.guild.roles.find(role => role.id === current.id)
                                member.addRole(c_role)
                            }
                        }
                    }

                    let role = messageReaction.message.guild.roles.find(role => role.id === item.id)

                    member.removeRole(role)
                    let c_role = messageReaction.message.guild.roles.find(role => role.id === greyRole)
                    member.addRole(c_role)

                    try {
                        var requestedColor = Color(item.name).hsl();
                    } catch (err) {
                        requestedColor = Color('#07E0DA').hsl();
                    }
                    msg.setTitle("Succesfully removed " + item.name + " role in **Smash Village**!")
                    msg.setColor(requestedColor.hex());
                    user.send(msg);
                    console.log('Removed role from ' + user.tag)
                }
            }


        }
        if (emote_id){
            item = config.SELF_ROLES.find(c => c.emote == emote_id);
            if (item) {

                var hasPrevRole = false
                for (let x = 0; x < keys.length; x++) {
                    if (item.id == keys[x]) {
                        hasPrevRole = true
                    }
                }
                if (hasPrevRole == true) {
                    let role = messageReaction.message.guild.roles.find(role => role.id === item.id)
                    member.removeRole(role)
                    msg.setTitle("Succesfully removed " + item.name + " role in **Smash Village**!")
                    msg.setColor(0xffff00);
                    user.send(msg);
                    console.log('Removed role from ' + user.tag)
                    return;

                }
            }
        }


    }

}
}