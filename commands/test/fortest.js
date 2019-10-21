exports.run = (bot, message, Discord, prefix) => {
 
    let config = require('../../.data/config.js');

   /*function parseJson(object){
    object.types.forEach(function(key) {
      console.log(key.name);
    });
}

parseJson(config.SELF_ROLES);*/

  var json = config.SELF_ROLES
  for (var key in json){
    let color = json[key]
    if(color.nitro == true){
      message.channel.send(color.name)
    }
    
    
  }
  //recursion(config.SELF_ROLES)
 /* for(var i=0;i<config.SELF_ROLES.length;i++)
  {
    
    message.channel.send(config.SELF_ROLES['name'][i])
  }*/
}