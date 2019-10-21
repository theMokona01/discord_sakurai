exports.run = (bot, message, Discord, prefix) => {
if(message.member.hasPermission("ADMINISTRATOR")){
  
  let messagecount;
  
  var msgDiv = message.content.split(" ")
  
  if(msgDiv[1] == null){
     messagecount = parseInt(2);
     message.channel.fetchMessages({ limit: messagecount})
     .then(messages => message.channel.bulkDelete(messages));
    return;
  }
  
messagecount = parseInt(msgDiv[1]) + 1;

if (messagecount <= 100){
  erase(messagecount)
  return;
  
}
  else if (messagecount <= 200){
  let dividedNumber  = Math.floor(messagecount / 2)
  erase(dividedNumber)
    return;
  
}
  if (messagecount <= 300){
  let dividedNumber  = Math.floor(messagecount / 3)
  erase(dividedNumber)
    return;
  
}
  if (messagecount <= 400){
  let dividedNumber  = Math.floor(messagecount / 4)
  erase(dividedNumber)
    return;
  
}
  if (messagecount <= 500){
 let dividedNumber  = Math.floor(messagecount / 5)
  erase(dividedNumber)
    return;
  
}


}
  else{
    return;
  }
  
   function erase(messagecount){
   message.channel.fetchMessages({ limit: messagecount})
  .then(messages => message.channel.bulkDelete(messages));
    return;
  }
  
}