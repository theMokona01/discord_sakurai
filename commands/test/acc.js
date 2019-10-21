exports.run = (bot, Discord, member) => {

//let user = message.mentions.users.first() || message.author;
let now = new Date;
const ch1 = bot.channels.find('id', '521446384327458818')

//month name to number
function getMonth(month) {
    month = month.toLowerCase();
    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    return months.indexOf(month) + 1;
}

function Int(number){
  return parseInt(number,10)
}
  
  function compareTime(user_gmt){
    //let user_time_gmt = user_gmt[4].split(":")
   // let user_hour = parseInt(user_time_gmt[0], 10)
    let current_hour = 3
    let user_hour = 2
   // current_hour = parseInt(current_hour,10)
    try{

    if(Math.abs(current_hour - user_hour) <= 1){
        member.ban()
        ch1.send(new Discord.RichEmbed()
                .setAuthor(member.tag +" has been banned!", member.avatarURL)
                .setDescription("Reason: Account created in less than 1 hour")
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16)));
      
    }  
    }
    catch(err){
   
      console.log(err)
  }
  
}
  
function compareDate(user_gmt){
  //day, month, year
//  let current_date = [now.getDate(), now.getMonth(), now.getFullYear()]
 // let user_date = [user_gmt[2], getMonth(user_gmt[1]), user_gmt[3]]\
  let current_date = [10, 1, 2019]
  let user_date = [10, 1, 2019]
  let isEqual = [false, false, false]
  
  for(let i = 0; i < 3; i++){
    if(Int(current_date[i]) == Int(user_date[i])){
      isEqual[i] = true
  }
 
}
  if(!isEqual.includes(false)){
     compareTime(user_gmt)    
  }
  
}
  
let user_gmt = String(member.createdAt)
ch1.send(member)
  ch1.send(user_gmt)
user_gmt = user_gmt.split(" ")
compareDate(user_gmt)
  
}