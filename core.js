//git clone https://github.com/voidpls/VoidBot.git
//ssh root@217.61.120.88
//.catch((e) => { console.log(e) })

//moment
var moment = require('moment');
//node-delete
var del = require('node-delete');
//sharp
var sharp = require('sharp');
//urban
var urban = require('urban');
//random-puppy
var randomPuppy = require('random-puppy');
//download-file
var download = require('download-file')
//discordie
var Discordie = require('discordie');
//client contructor
var client = new Discordie({
  messageCacheLimit: 1000,
  autoReconnect: true
});
//prefix
var p = '..'
//data
var data = require('./data.json')

var redpill = data.redpill
var holocaust = data.holocaust

//variables
var links = data.diversity

var spamIDs = [
  //Effy
  '135721889828962305',
  //Void#4724
  '299052998355714049',
  //Void#9093
  '325827542164439040',
  //atdit
  '241875461171445761',
  //stacey
  '299036445157621760',
  //atdit non-mod
  '325313826352398350',
  //faith
  '164599925911322625',
  //142r
  '340568262477611009'
]

var urmomgay = [ 'ur mom', 'ur mum', 'your mom', 'your mum' ]

var niggers = data.nigs

var swastika = data.swastika
var islam = [
  'http://www.voidpls.tk/islam/peace1.jpg',
  'http://www.voidpls.tk/islam/peace2.jpg',
  'http://www.voidpls.tk/islam/peace3.jpg'
]

//descriptions:

var info = data.info

var botid = ['323992245781135360']
var everyone = info["heil"] + info["gas"] + info["diversity"] + info["nigger"] + info["redpill"] + info["holocaust"] + info["islam"] + info["remind"] + info["poll"] + info["pic"] + info["urban"] + info["lmgtfy"] + info["modping"] + info["complain"]
var mods =   info["swastika"] + info["ping"] + info["kick"] + info["ban"]
var game = {name: "made by Void | ..help"}

start();

 function start(){
   client.connect({
     token: "MzM0NDc1ODI1MjU4ODIzNzAx.DF8bWA.nP86G5qFffEJTz30ZTtgyRBb0L0"
   });
   client.User.setStatus("dnd", game);
 }
client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("DISCONNECTED", () => {
  console.log('Disconnected from Discord');
});

//welcome
client.Dispatcher.on("GUILD_MEMBER_ADD", e => {
  function send() {
    channel.sendMessage(`Welcome to Moon Central, ${e.member.mention}!`);
  }
  let channel = client.Channels.get('325648252810690570');
	if (e.guild.id === "325315599708454913") {
    setTimeout(send, 5000);
  }
});

//commands
client.Dispatcher.on("MESSAGE_CREATE", e => {

var author = e.message.author

if (author.id == client.User.id) return;
else {
  //args
  var args = e.message.content.split(/[ ]+/);

  var channel = e.message.channel
  var content = e.message.content.toLowerCase();

  client.Users.fetchMembers()
  var me = client.Users.find(u => u.id == '325827542164439040');
  //has mod function
  function hasMod(IUser) {
    return IUser.can(Discordie.Permissions.General.MANAGE_ROLES, e.message.guild);
  }

//tagspam mk. ii
  if (content.startsWith(p + 'stag') && spamIDs.includes(author.id)) {
  if (args.length > 2){
    var number = parseInt(args.pop());
    args.shift();
    spamtext = args.join(' ');
    e.message.delete();
    while (number != 0){
      channel.sendMessage(spamtext).then(m => {
        m.delete();
      })
      number = number - 1
    }
  }
  else return;
}

//prune mk. ii /purge
  if (content.startsWith(p + 'd') &&
  args.length == 2 &&
  author.can(Discordie.Permissions.Text.READ_MESSAGES, e.message.channel)) {
    channel.fetchMessages();
    var msgs = channel.messages;
    if (isNaN(args[1])) {
      if (args[1] == 'bots'){
        e.message.delete();
        var msgArray = msgs.filter(m => m.deleted == false && m.author.bot == true);
        msgArray.reverse();
        msgArray.length = 25
        client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
      }
    }
    if (!isNaN(args[1])){
      var msgArray = msgs.filter(m => m.deleted == false);
      msgArray.reverse();
      msgArray.length = parseInt(args[1], 10) + 1
      client.Messages.deleteMessages(msgArray).catch(e => console.log(e));
    }
}
//self message function
  function on_message(arg1, arg2){
    if (content == p + arg1 && hasMod(author))
    channel.sendMessage(arg2);
  }

//global message function
  function globalon_message(arg1, arg2){
  if (content == p + arg1 &&
      author.id != client.User.id)
  channel.sendMessage(arg2);
  }
//global message + delete
  function globaldel_message(arg1, arg2){
    if (content == p + arg1 &&
        author.id != client.User.id &&
        author.bot != true){
    e.message.delete();
    channel.sendMessage(arg2);
  }
  }
//ping
  if (content == p + 'ping' && hasMod(author)) {
    let start = process.hrtime();
    channel.sendMessage(":ping_pong:  |  Pong! - Time taken:").then(m => {
      const diff = process.hrtime(start);
      let time = diff[0] * 1000 + diff[1] / 1000000
      m.edit(':ping_pong:  |  Pong! - Time taken: **' + Math.round(time) + 'ms**');
    });
  }

//log
  var mainacc = client.Users.get('325827542164439040');
  if (author.id == '218177032327135232'){
  var channel = client.Channels.get('327320793681756161');
  channel.sendMessage('Baecon said: \"' + e.message.content + '\"');
}
  else if (content.includes('void') &&
           author.id != client.User.id &&
           author.bot != true &&
          !mainacc.isMentioned(e.message)) {
  var channel = client.Channels.get('327331811292217347');
  channel.sendMessage("`" + author.username + "` said: `\"" + e.message.content + "`\"");
}
  else if (mainacc.isMentioned(e.message) &&
           author.id != client.User.id &&
           author.bot != true){
  var channel = client.Channels.get('327331811292217347');
  let me = client.Users.get('325827542164439040');
  let contentFixed = e.message.content.replace(/<@325827542164439040>/g, '@' + me.username).replace(/<@!325827542164439040>/g, '@' + me.username)
  channel.sendMessage("`" + author.username + "` said: `\"" + contentFixed + "`\"");
}
//poll
  if (content.startsWith(p + 'poll')) {
  channel.sendMessage('**Poll:**' + args.join(" ").substring(6)).then(m => {
    m.addReaction('✅').then(m.addReaction('❎'));
  });
  e.message.delete();
}
//y/n poll
  if (content.includes('y/n')){
  e.message.addReaction('✅').then(e.message.addReaction('❎'));
}

//random on message
function random_on_message(arg, list){
  var i = Math.floor(list.length * Math.random());
  if (content == p + arg)
  channel.sendMessage(list[i]);
}

//now grenze
if (content == 'now grenze')
e.message.delete();

//spam
  if (content.startsWith(p + 'spam') && spamIDs.includes(author.id)) {
    if (args.length > 2){
      var number = parseInt(args.pop());
      args.shift();
      spamtext = args.join(' ');
      e.message.delete();
      while (number != 0){
        channel.sendMessage(spamtext);
        number = number - 1
      }
    }
    else {
      channel.sendMessage('Use `..spam [text] [#]`');
      e.message.delete();
    }
  }

//ping admins/mod
  if (content == p + "modping" && e.message.guild.id == '325315599708454913'){
    let members = client.Users.membersForGuild('325315599708454913');
    let membersArray = members.filter(m => m.hasRole('325320325409669130') || m.hasRole('325320348553969685') || m.hasRole('333750148788125707'))
    .filter(m => m.status != 'offline')
    var membersMention = membersArray.map(m => m.nickMention).join(' | ');
    channel.sendMessage('**Tagging all online Staff...** \n' + membersMention);
  }

//tfw
  var tfw = ['tfw', 'mfw', '>tfw', "mfw"]
  if (tfw.includes(args[0])) channel.sendMessage('Nobody gives a shit about how you feel, kill yourself ' + author.mention);

//nick
  if (content.startsWith('-' + "nick")){
    if (author.id == me.id){
      args.shift();
      var nick = args.join(' ');
      var botuser = client.User.memberOf(channel.guild);
      botuser.setNickname(nick);
      channel.sendMessage("<:check:335544753443831810> Nickname changed to `"+ nick +"`")
      }
      else channel.sendMessage("<:error:335660275481051136> **Bot Owner Only**");
   }
//feedback
  if (content.startsWith(p + 'complain')){
    var fbChannel = client.Channels.get('335540223884656640');
    args.shift();
    var feedback = args.join(' ');
    if (feedback.length < 10){
      channel.sendMessage("`Error: Feedback too short (10+ characters)`");
    }
    else {
    fbChannel.sendMessage('', false, {
          color: 0xD00000,
          author: {
           name: author.username + "#" + author.discriminator,
           icon_url: author.avatarURL
         },
          fields: [{name: "**Feedback:**", value: feedback}],
          footer: {
            text: "User ID ("+ author.id +")"
          }
        });
      e.message.addReaction(":check:335548356552294410")
  }
}
//level up
  if (content.includes('leveled up!')){
  channel.sendMessage('***L-L-LEVEL UP!!!***');
  }

//roleme
/*
  if (content == p + 'roleme'){
    e.message.member.assignRole('325320348553969685')
  } */

//holocaust
  if (content.startsWith(p + 'holocaust')){
    var intarg = parseInt(args[1]) - 1

    if (args.length == 1){
    channel.sendMessage('Please type `..holocaust [1-10]`');
  }
    else if (args.length == 2){
    channel.sendMessage(holocaust[intarg]);
  }
    else {
      channel.sendMessage(holocaust[intarg]);
    }
}

//avatar
  if (content.startsWith(p + 'pfp')) {
    if (args.length == 1) {
      var avatarurl = author.avatarURL.replace('.jpg', '.png?size=1024');
      channel.sendMessage(avatarurl);
    }
    else if (args.length == 2) {
      let user = getUser(args[1]);
      if (user === undefined) return;
      else {
      var avatarurl = user.avatarURL.replace('.jpg', '.png?size=1024');
      channel.sendMessage(avatarurl);
    }
  }
}
//reacts
  if (author.id == '196296279771316224'){
  e.message.addReaction('🦊');
}
//echo
  if (content.startsWith(p + 'echo') &&
      spamIDs.includes(author.id)){
  channel.sendMessage(args.join(" ").substring(6));
  e.message.delete();
}
  else if (content.startsWith(p + 'echo') &&
      author.id != '299052998355714049')
      e.message.reply('nice try')
//ur mom gay
  if (content.startsWith('ur mom') || content.startsWith('ur mum') || content.startsWith('your mom') || content.startsWith('your mum') || content.startsWith('your mother'))
  channel.sendMessage('no u');

//urban
  if (content.startsWith(p + 'ud')){
    if (args.length == '1'){
      var udRand = urban.random().first(function(json) {
        channel.sendMessage('',false, {
            color: 0xD00000,
            author: {
            name: json.word,
            icon_url: "http://www.voidpls.tk/files/urban.jpg"
            },
            fields: [ {name: "**Definition:**", value: json.definition},
                      {name: "**Example:**", value: json.example},
                      {name: "**Vote:**", value: "**👍 " + json.thumbs_up + " 👎 " + json.thumbs_down + "**"}],
            footer: {
              text: "Author: " + json.author
              }
          });
      });
    }
    else {
      args.shift();
      var ud = urban(args);
      if (ud != undefined) {
        ud.first(function(json) {
          if (json === undefined) channel.sendMessage("**<:error:335660275481051136> No Definition Found**");
          else
          channel.sendMessage('',false, {
              color: 0xD00000,
              author: {
              name: json.word,
              icon_url: "http://www.voidpls.tk/files/urban.jpg"
              },
              fields: [ {name: "**Definition:**", value: json.definition},
                        {name: "**Example:**", value: json.example},
                        {name: "**Vote:**", value: "**👍 " + json.thumbs_up + " 👎 " + json.thumbs_down + "**"}],
              footer: {
                text: "Author: " + json.author
                }
            });
        });
    }
  }
}

//lmgtfy
if (content.startsWith(p + 'lmgtfy') && args.length >= 2){
  args.shift();
  var q = args.join('+');
  e.message.channel.sendMessage("http://lmgtfy.com/?q=" + q);
}

//guilds
  if (content == p + 'servers'){
    var guilds = client.Guilds
    var now = moment()
    var formatted = now.format('ddd, MMM Do, YYYY hh:mma')

    channel.sendMessage('',false, {
      color: 0xD00000,
      title: "I am in **" + guilds.length + "** servers",
      footer: {
        text: formatted
      }
    });
  }
  if (content == p + 'list' && author.id == mainacc.id){
    var listGuilds = client.Guilds.map(g => g.name);
    channel.sendMessage('**I\'m in these servers: \n**' + listGuilds.join('\n'))
}


//puppy
  if (content == p + 'cute') search('aww', '')

  function reduce(int, md, image){
    if (md.width >= md.height) return image.resize(Math.round(md.width - md.width*int));
    else return image.resize(Math.round(md.length - md.length*int));
  }
//imgur
  if (content.startsWith(p + 'pic ')){
    if (args.length >= 2){
      args.shift();
      var arg = args.join('')
      var q = arg.replace('r/', '').replace('/r/', '')
      channel.sendMessage("Searching for **" + arg + "**...").then(msg => {
        function search(q, imageMsg){
          randomPuppy(q).then(pic => {

            if (pic === undefined) msg.edit('<:error:335660275481051136> No results found for **' + arg + '**');
            else
              var filename = pic.slice(pic.length - 11).replace('\m', '')
              var jpgFilename = filename.replace('png', 'jpg')
              var url = pic.replace('imgur', 'i.imgur')
              if (url.slice(url.length - 3) == 'gif'){ search(q, imageMsg); console.log('gif'); return; }
              else
              console.log(url)
              download(url, {directory: "./png/", filename: filename}, function (err) {
                if (err) setTimeout(function() {search(q, imageMsg); console.log('Retrying');}, 1000)
                else {
                  var image = sharp('./png/' + filename)
                  image
                    .metadata()
                    .then(function(metadata) {
                      if (metadata.width >= '1999' || metadata.height >= '1999'){
                        if (metadata.width >= '7999' || metadata.height >= '7999') { reduce(0.7, metadata, image); console.log('kkk(8k)'); }
                        else if (metadata.width >= '4999' || metadata.height >= '4999') { reduce(0.6, metadata, image); console.log('kkk(5k)'); }
                        else if (metadata.width >= '3999' || metadata.height >= '3999') { reduce(0.5, metadata, image); console.log('kkk(4k)'); }
                        else if (metadata.width >= '2999' || metadata.height >= '2999') { reduce(0.4, metadata, image); console.log('kkk(3k)'); }
                        else { reduce(0.3, metadata, image); console.log('kkk(2k)'); }
                      }
                      image
                        .toFile('./jpg/' + jpgFilename, function(err){
                          if (err) { console.log(err) }
                          else {
                            channel.uploadFile('./jpg/' + filename, filename, imageMsg)
                            .then(() => {
                              msg.delete()
                              setTimeout(function(){ del(['./jpg/' + jpgFilename, './png/*']) }, 3000)
                            });
                          }
                        });
                    });
                  }
                })
            }).catch(e => console.log(e));
          }
        search(q, "<:image:340725852612460544> Image results for **" + arg + "**:");
      });
    }
}
//die
   if (content.startsWith(p + 'kill') && author.id == '325827542164439040')
   e.message.addReaction('💀').then(client.disconnect());

 //restart
   if (content.startsWith(p + 'restart') && author.id == '325827542164439040'){
   channel.sendMessage('<:raygun:335653827267264514>  |  i have raygun pls revive - `Restarting Bot...`').then(client.disconnect());
   console.log("Restarting");
   setTimeout(start, 5000);
 }

var kkIds = [
'340568262477611009',
mainacc.id
]
//kick
    if (content.startsWith(p +'gas') && kkIds.includes(author.id)){
    if (args.length == 2){
      let user = getUser(args[1]);
      if (user === undefined) return;
      else {
        user.kick();
        channel.sendMessage("<:check:335544753443831810>** " + user.username + " **has been gassed!");
      }
    }
    else if (args.length == 1){ channel.sendMessage('**Hans, get the gas!**'); return; }
    else return;
}

//ban
if (content.startsWith(p +'zyklon') && kkIds.includes(author.id)){
   if (args.length == 2){
     let user = getUser(args[1]);
     if (user === undefined) return;
     else {
      user.ban(0);
      channel.sendMessage("<:check:335544753443831810>** " + user.username + " **has been treated with a lethal dose of Zyklon-B");
    }
  }
  else if (args.length == 1) channel.sendMessage('**Revving up the Gas Chambers...**');
}
//get user function
  function getUser(arg) {
    user = arg.replace(/\D/g,'');
    user = e.message.guild.members.find(gUser => gUser.id === user);

    if (user === undefined) {
        return;
    }
    return user;
}
//help
  if (content == p + 'help'){
  var bot = client.User;
  var pfp = me.avatarURL.replace('.jpg', '.png');
//embed
   channel.sendMessage('',false, {
      color: 0xD00000,
      author: {
       name: 'ϟϟ Bot Help',
       icon_url: bot.avatarURL
     },
      fields: [{name: "**Commands**", value: everyone},
              {name: "**Private Commands**", value: mods}],
      footer: {
        icon_url: pfp,
        text: "Made by Void, for the honor of Mein Fürher"
      }
    });
}
//basic commands
  on_message('swastika', swastika);
  globaldel_message('salute', '<:TopKek:338007448860229633><:pepeSalute:338007522050965506> <:swastika:325668829759930368>');
  globaldel_message('jihad', '<:jihad:322904816441491456>');
  globaldel_message('911', '<:plane:334937403217281024><:towers:334934504647032832>');
  globaldel_message('morticia', 'http://www.voidpls.tk/files/morticia.jpg');
  globaldel_message('hitler', '<:a1:338564354955804672><:a2:338564371435487234><:a3:338564382789468162> \n<:a4:338564396404047873><:a5:338564407850434560><:a6:338564418902425616> \n<:a7:338564428318507011><:a8:338564438330441729><:a9:338564448916602880>');
  globalon_message('bob', '`bob`? I think you mean `gay faggot`');
  globalon_message('gay faggot', '`gay faggot`? I think you mean `bob`');
  globaldel_message('gas', ':star_of_david: **Gas the Kikes** :star_of_david:');
  globalon_message('heil', 'http://www.voidpls.tk/files/hitler.png');
  globalon_message('truth', 'Girls are the best but like Effy is better');
  globalon_message('remind', '**--------------------------------\n<:swastika:325668829759930368>   Daily Reminder:   <:swastika:325668829759930368>\nHitler Did Nothing Wrong!\n--------------------------------**');
  random_on_message('diversity', links);
  random_on_message('nigger', niggers);
  random_on_message('redpill', redpill);
//islam
  let islamI = Math.floor(islam.length * Math.random());
  if (content == p + 'islam')
  channel.sendMessage('"Religion of Peace" \n' + islam[islamI]);
}
});
