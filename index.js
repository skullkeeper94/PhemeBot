const discord = require('discord.js');
const client = new discord.Client();
const prefix = '!';
const NXErrorCodes = require('./NXErrorCodes.js');
var fs = require('fs');
var os = require('os');
const version = '0.1.0';

//Run when the bot is ready
client.on('ready', () => {
    //Set the bot status text
    client.user.setPresence({ activity: { name: '!help', type: 2 }, status: 'idle' });
});

//Message received
client.on('message', msg =>{
    //Don't do anything if not a command
    if(msg.content[0] != prefix) return;
    //Get the command text
    const commandText = msg.content.toLowerCase().split(' ')[0];

    switch (commandText) {
        //Toggle the tester role
        case prefix + 'tester':
        const testerRole = msg.guild.roles.cache.find(item => item.name === 'Tester');
        if(msg.member.roles.cache.find(item => item.name === 'Tester')) msg.member.roles.remove(testerRole);
        else msg.member.roles.add(testerRole);
        break;
        //Switch error code info command
        case prefix + 'serr':
        var errorCode = msg.content.toLowerCase().split(' ')[1];
        var module = 0;
        var description = 0;
        //Check which format the code is in
        if(errorCode.startsWith('0x'))
        {
            module = parseInt(errorCode) & 0xff; //Module is the first 8 bits so we do bitwise and with 255
            description = parseInt(errorCode) >> 9; //Bit shift 9 to the right to get the description
        }
        else
        {
            module = errorCode.split('-')[0] - 2000; //Subtract 2000 to get the module info
            description = parseInt(errorCode.split('-')[1]); //Description is just the second number
        }
        //Check we can get info about that module
        if(NXErrorCodes.NXModules[module] == undefined)
        {
            msg.channel.send("Unkown module");
            return;
        }
        //Create a new embed with the error info
        var errorEmbed = new discord.MessageEmbed()
        .setColor('#fc0303')
        .setTitle('Switch error code info')
        .setDescription(NXErrorCodes.NXModules[module].descriptions[description])
        .addFields({name: 'Module', value: NXErrorCodes.NXModules[module].moduleName, inline: true}, {name: 'Description', value: description, inline: true});
        msg.channel.send(errorEmbed);
        break;
        //Help command
        case prefix + 'help':
        var helpEmbed = new discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('Pheme commands')
        .setDescription('The following commands are supported (non case sensitive)')
        .addFields({name: prefix + 'Help', value: 'Gives info about Pheme commands (obviously)'}, {name: prefix + 'About', value: 'Gives info about Pheme'}, {name: prefix + 'Tester', value: 'Toggles if you are a tester'}, {name: prefix + 'Serr <error code>', value: 'Gives info about a Nintendo Switch error code'});
        msg.channel.send(helpEmbed);
        break;
        //about command
        case prefix + 'about':
        var aboutEmbed = new discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('About')
        .setDescription('Pheme by CompSciOrBust')
        .addFields({name: 'Version', value: version, inline: true}, {name: 'Host OS', value: os.type(), inline: true});
        msg.channel.send(aboutEmbed);
        break;
    }
});

//When someone joins the server
client.on('guildMemberAdd', member =>{
    const generalChannel = member.guild.channels.cache.find(channel => channel.name == 'general');
    const rulesChannel = member.guild.channels.cache.find(channel => channel.name == 'rules');
    generalChannel.send('<@' + member.id + '> Welcome to the ' + member.guild.name + ' Discord server! Please read <#' + rulesChannel.id + '>!');
});

//Log the bog in
fs.readFile(__dirname + '/discord.key', 'utf8', function(err, contents) {
    client.login(contents);
});