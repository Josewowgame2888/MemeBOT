const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

const messagesGeek = [
  "Tengo el meme adecuado para ti :D",
  "Este meme es para los reyes",
  "Simplemente, Maravilloso",
  "uff, Demasiado para mi",
  "Simplemente exitante"
];




console.log("[Bot] Iniciando Bot");


client.on('ready', () => {
    console.log("[Bot] Bot iniciado correctamente");
    console.log("[Bot] Existen : "+calcular()+" memes en el sistema");
  });

  function numeroAleatorioDecimales(max) {
    return parseInt(Math.random()*max+1);
  } 
function getArrayMessage(){
  return messagesGeek.length;
}
function calcular(){
  var files = fs.readdirSync("memes");
  return files.length;
}
client.on('message', message =>{
  var messageNum = numeroAleatorioDecimales(getArrayMessage());
if(!messageNum == 0){
  messageNum = messageNum-1;
}else{
  messageNum = 0;
}
if(message.content.startsWith("geek help")){
const embedHelp = new Discord.RichEmbed()
.setColor('#0099ff')
.setTitle('Geek Help')
.setAuthor('Geek', 'http://i65.tinypic.com/17pop3.png', 'https://twitter.com/bot_gorden')
.setThumbnail('http://i65.tinypic.com/17pop3.png')
.addField('Visita a mi creador', 'https://twitter.com/bot_gorden')
.addBlankField()
.addField('Escribe (pls meme) o usa /meme', 'Geek te enviara un meme random', true)
.addField('☐', '☐', true)
.addField('Quieres subir tu meme a Geek?', 'Visita : www.geek.con/upload.php', true);
message.channel.send(embedHelp);


}
  if(message.content.startsWith("pls meme")){
    if(calcular() == 0){
      message.channel.send("No existen memes en mi sistema :(");
    }else{
      if(calcular() == 1){
        //envia 0 
        if(fs.existsSync("memes/0.png")){
          message.channel.send(messagesGeek[messageNum], { files: ["memes/0.png"]});
        }
        if(fs.existsSync("memes/0.jpg")){
          message.channel.send(messagesGeek[messageNum], { files: ["memes/0.jpg"]});
        }
        if(fs.existsSync("memes/0.gif")){
          message.channel.send(messagesGeek[messageNum], { files: ["memes/0.gif"]});
        }
      
      }
      if(calcular() > 1){
//random meme

var numero = numeroAleatorioDecimales(calcular());
if(!numero == 0){
numero = numero-1;
}else{
numero = 0;
}

if(fs.existsSync("memes/"+numero+".png")){
message.channel.send(messagesGeek[messageNum], { files: ["memes/"+numero+".png"]});
}
if(fs.existsSync("memes/"+numero+".jpg")){
message.channel.send(messagesGeek[messageNum], { files: ["memes/"+numero+".jpg"]});
}
if(fs.existsSync("memes/"+numero+".gif")){
message.channel.send(messagesGeek[messageNum], { files: ["memes/"+numero+".gif"]});
}

      }
        
      
    }
  }
});
  client.on('message', message => {
    if(message.author.equals(client.user) || !message.content.startsWith("/")) return;
    var args = message.content.substring("/".length).split(" ");	
    switch(args[0].toLowerCase()){
        case "meme":
            var messageNum = numeroAleatorioDecimales(getArrayMessage());
            if(!messageNum == 0){
              messageNum = messageNum-1;
            }else{
              messageNum = 0;
            }
          if(calcular() == 0){
            message.channel.send("No existen memes en mi sistema :(");
          }else{
            if(calcular() == 1){
              //envia 0 
              if(fs.existsSync("memes/0.png")){
                message.channel.send(messagesGeek[messageNum], { files: ["memes/0.png"]});
              }
              if(fs.existsSync("memes/0.jpg")){
                message.channel.send(messagesGeek[messageNum], { files: ["memes/0.jpg"]});
              }
              if(fs.existsSync("memes/0.gif")){
                message.channel.send(messagesGeek[messageNum], { files: ["memes/0.gif"]});
              }
            
            }
            if(calcular() > 1){
//random meme
var numero = numeroAleatorioDecimales(calcular());
if(!numero == 0){
  numero = numero-1;
}else{
  numero = 0;
}

if(fs.existsSync("memes/"+numero+".png")){
 message.channel.send(messagesGeek[messageNum], { files: ["memes/"+numero+".png"]});
}
if(fs.existsSync("memes/"+numero+".jpg")){
 message.channel.send(messagesGeek[messageNum], { files: ["memes/"+numero+".jpg"]});
}
if(fs.existsSync("memes/"+numero+".gif")){
 message.channel.send(messagesGeek[messageNum], { files: ["memes/"+numero+".gif"]});
}

            }
              
            
          }
            
        break;
        case "ghelp":
            const embedHelp = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Geek Help')
            .setAuthor('Geek', 'http://i65.tinypic.com/17pop3.png', 'https://twitter.com/bot_gorden')
            .setThumbnail('http://i65.tinypic.com/17pop3.png')
            .addField('Visita a mi creador', 'https://twitter.com/bot_gorden')
            .addBlankField()
            .addField('Escribe (pls meme) o usa /meme', 'Geek te enviara un meme random', true)
            .addField('☐', '☐', true)
            .addField('Quieres subir tu meme a Geek?', 'Visita : www.geek.con/upload.php', true);
        
            message.channel.send(embedHelp);
            
        break;
    }
    
    
    
    });
client.login('NTkyOTM0MzU4NjU1MDQxNTUx.XRGjPQ.rMUggN_WJwAPuW80909GShpNQr4');