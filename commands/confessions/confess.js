exports.run = (bot, message, Discord, prefix) => {

    let msgDiv = message.content.split(" ")
    if(msgDiv[1] == null || msgDiv[2] == null || msgDiv[3] == null){
        return;
    }

    const fs = require("fs");
    const unconf = require("../../.data/confUnconfirmed.json");

    const channelid = '634886315288166400'
    const ch1 = bot.channels.find('id', '634952940330680350')

    var count = [1]
    var content = ['']
    var confManagerRoleID = "635228752799989790"

    if(!unconf[channelid]){
        unconf[channelid] = {
            n: [1],
            c: [message.content]
        };
        fs.writeFile("./.data/confUnconfirmed.json", JSON.stringify(unconf), (err) => {
            if(err)
                console.log(err);
        });

        content.push(message.content)
    }
    else{
        count = unconf[channelid].n
        content = unconf[channelid].c

        count.push(parseInt(count[count.length - 1] , 10) + 1)
        content.push(message.content)

        if(count.length > 10){
            count.shift()
            content.shift()
        }


        unconf[channelid].n = count
        unconf[channelid].c = content

        fs.writeFile("./.data/confUnconfirmed.json", JSON.stringify(unconf), (err) => {
            if(err)
                console.log(err);
        });
    }


    const embed = {
        "title": `Type /accept ${count[count.length - 1]}, to post it in #confessions`,
        "description": content[content.length - 1] ,
        "color": 3524853,

        "author": {
            "name": `New Annonymous Confession Request #${count[count.length - 1]}`
        },
    };
    ch1.send("<@&"+confManagerRoleID+">", { embed });

}