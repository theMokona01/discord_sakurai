exports.run = (bot, message, Discord) => {

var jimp = require('jimp');
const ch = bot.channels.find('id', '528403497406955538')
//const ch = bot.channels.find('name', '🍣│ngi-spam')
var memberavatar = message.user.avatarURL;
//var memberavatar = message.author.avatarURL;
var p1 = jimp.read('https://i.imgur.com/Vne4OmW.png')
.then(x => {
    return x
      .resize(270, jimp.AUTO);// resize 
  })
  .catch(err => {
    console.error(err);
  });
   
  
   if(memberavatar == null){
           memberavatar = "https://i.ibb.co/D9qhvN3/random.jpg";;
          }
 
          
var p2 =  jimp.read(memberavatar)
     .then(prof => {
    return prof
      .resize(80, 80) // resize
      
      
  })
  .catch(err => {
    console.error(err);
  });

var p3 = jimp.read('https://i.imgur.com/u9Uj4Pj.png')
    .then(f => {
    return f
      
      .resize(280, jimp.AUTO)
      
  })
  .catch(err => {
    console.error(err);
  });


Promise.all([p1, p2, p3]).then(function(images){
    var challenger = images[0];
    var newMember = images[1];
    var final = images[2]
    let newuser = "<@"+message.user.id+">"
    //let newuser = "<@"+message.author.id+">"
 challenger.composite(newMember, 152, 26).composite(final, -5,-3).getBuffer(jimp.MIME_PNG, (err, buffer) => {
ch.send(`:warning: New challenger `+newuser+` approaches! :warning:`,new Discord.Attachment(buffer ,`welcome.png`))
//message.channel.send(`:warning: New challenger `+newuser+` approaches! :warning:`,new Discord.Attachment(buffer ,`welcome.png`))
})
  

});
  return;
        }