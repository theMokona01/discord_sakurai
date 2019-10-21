exports.run = (bot, messageReaction, Discord, user) => {

    let member = messageReaction.message.guild.members.find(member => member.id === user.id)
    let allowedRole = ["578037827875373077"]
    let isNoob = false;
    let keys = Array.from(member.roles.keys());

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == allowedRole[0] || keys[i] == allowedRole[1])
            isNoob = true
    }

    if (member) {


            if (isNoob == true) {
                let noob_role = messageReaction.message.guild.roles.find(role => role.id === '578037827875373077')
                let color_role = messageReaction.message.guild.roles.find(role => role.id === '599649048248582155')
                let notif_role = messageReaction.message.guild.roles.find(role => role.id === '545640627170443264')
                let special_role = messageReaction.message.guild.roles.find(role => role.id === '545643096491163668')
                let rank_role = messageReaction.message.guild.roles.find(role => role.id === '545640505925566464')

                member.removeRole(noob_role)

                    .then(msg => {
                        member.addRole(color_role)
                    })
                    .then(msg => {
                        member.addRole(notif_role)
                    })
                    .then(msg => {
                        member.addRole(special_role)
                    })
                    .then(msg => {
                        member.addRole(rank_role)
                    })
                    .then(msg => {
                        let cFx = require(`./welcome.js`)
                        cFx.run(bot, member, Discord)
                        console.log('bruh')
                    })

                return
            }

    }

}