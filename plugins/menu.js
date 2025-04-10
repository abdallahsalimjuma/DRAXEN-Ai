const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*
    
     *꧁ྀི*DRAXEN-AI*ྀི꧂*
*❖╭─────────────···▸*
> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *ɴᴀᴍᴇ ʙᴏᴛ* : *DRAXEN*
> *ᴄʀᴇᴀᴛᴏʀ* : *DRAXEN Ai*
> *ᴠᴇʀsɪᴏɴ* : *ᴠ.2.0*
*❖╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
*├➤ 2 • ᴀɪ ᴍᴇɴᴜ
*├➤ 3 • ᴀɴɪᴍᴇ ᴍᴇɴᴜ
*├➤ 4 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
*├➤ 5 • ғᴜɴ ᴍᴇɴᴜ
*├➤ 6 • ᴍᴀɪɴ ᴍᴇɴᴜ
*├➤ 7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ
*├➤ 8 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ
*├➤ 9 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ
*├➤ 10 • ʀᴇᴀᴄᴛɪᴏɴs
*├➤ 11 • sᴄᴀᴍᴍᴇʀ 
*╰╼╼╼╼╼╼╼╼╼╼*
* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤ 🔢Reply with the Number you want to select

> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/c855r3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*꧁◈╾───☉ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• tt2
┃◈┃• pins
┃◈┃• apk2
┃◈┃• fb2
┃◈┃• pinterest 
┃◈┃• spotify
┃◈┃• play
┃◈┃• play2
┃◈┃• play3
┃◈┃• play4
┃◈┃• play5
┃◈┃• play6
┃◈┃• play7
┃◈┃• play8
┃◈┃• play9
┃◈┃• play10
┃◈┃• audio
┃◈┃• video
┃◈┃• video2
┃◈┃• video3
┃◈┃• video4
┃◈┃• video5
┃◈┃• video6
┃◈┃• video7
┃◈┃• video8
┃◈┃• video9
┃◈┃• video10
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• song
┃◈┃• darama
┃◈┃• gdrive
┃◈┃• ssweb
┃◈┃• tiks
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai 🤎*`);
                        break;
                    case '2':               
                        reply(`*꧁◈╾───☉ ᴀɪ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• ai
┃◈┃• gpt3
┃◈┃• gpt2
┃◈┃• gptmini
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• luma
┃◈┃• dj 
┃◈┃• khan
┃◈┃• jawad
┃◈┃• gpt4
┃◈┃• bing
┃◈┃• imagine 
┃◈┃• imagine2
┃◈┃• copilot
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai 🤎*`);
                        break;
                    case '3':               
                        reply(`*꧁◈╾───☉ ᴀɴɪᴍᴇ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai* 🤎`);
                        break;
                    case '4':               
                        reply(`*꧁◈╾───☉ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• emojimix
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• tinyurl
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• url
┃◈┃• repeat 
┃◈┃• ask
┃◈┃• readmore
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai* 🤎`);
                        break;
                    case '5':               
                        reply(`*꧁◈╾───☉ ғᴜɴ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• shapar
┃◈┃• rate
┃◈┃• insult
┃◈┃• hack
┃◈┃• ship
┃◈┃• character
┃◈┃• pickup 
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai* 🤎`);
                        break;
                    case '6':               
                        reply(`*꧁◈╾───☉ ᴍᴀɪɴ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai* 🤎`);
                        break;
                    case '7':               
                        reply(`*꧁◈╾───☉ ɢʀᴏᴜᴘ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• grouplink
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai`);
                       break;
                    case '8':               
                        reply(`*꧁◈╾───☉ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai* 🤎`);
                        break;
                    case '9':               
                        reply(`*꧁◈╾───☉ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• pair
┃◈┃• pair2
┃◈┃• pair3
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN-Ai* 🤎`);
                        break;
                    case '10':               
                        reply(`*꧁◈╾───☉ ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
┃◈┃• bully @tag
┃◈┃• cuddle @tag
┃◈┃• cry @tag
┃◈┃• hug @tag
┃◈┃• awoo @tag
┃◈┃• kiss @tag
┃◈┃• lick @tag
┃◈┃• pat @tag
┃◈┃• smug @tag
┃◈┃• bonk @tag
┃◈┃• yeet @tag
┃◈┃• blush @tag
┃◈┃• smile @tag
┃◈┃• wave @tag
┃◈┃• highfive @tag
┃◈┃• handhold @tag
┃◈┃• nom @tag
┃◈┃• bite @tag
┃◈┃• glomp @tag
┃◈┃• slap @tag
┃◈┃• kill @tag
┃◈┃• happy @tag
┃◈┃• wink @tag
┃◈┃• poke @tag
┃◈┃• dance @tag
┃◈┃• cringe @tag   
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN Ai* 🤎`);
                        break;
                    case '11':               
                        reply(`*꧁◈╾───☉ sᴄᴀᴍᴍᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ ☉───╼◈꧂*
                        
╭────────●●►
┃★│ • BC tatta 1👆: https://api.whatsapp.com/send?phone=923181093514&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL👆
┃★│ • BC tatta 2👆: https://api.whatsapp.com/send?phone=923094230218&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL👆
┃★│ • BC tatta 3👆: https://api.whatsapp.com/send?phone=447715929714&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL👆
┃★│ • BC tatta 4👆: https://api.whatsapp.com/send?phone=923092342318&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL👆
┃★│ • BC tatta 5👆: https://api.whatsapp.com/send?phone=923304093758&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL👆
┃★│ • BC tatta 6👆: https://api.whatsapp.com/send?phone=923202231275&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL👆
┃★│ • BC tatta 7👆: https://api.whatsapp.com/send?phone=923134885399&text=hi+bc+scammer👆
┃★│ • BC gashti 1👆: https://api.whatsapp.com/send?phone=923299539369&text=hi+bc+scammer👆
╰────────────────────●●►

*꧁◈╾───☉ ɪᴍᴘᴏʀᴛᴀɴᴛ ᴍᴇssᴀɢᴇ ☉───╼◈꧂*
╭────────●●►
┃★│ • Please report to all these scammers's numbers.
┃★│ • If you have more scammers's number so contact me. I will add in my bot.
┃★│ • Owner: https://api.whatsapp.com/send?phone=255716945971&text=Hello+𓄂.DRAXEN Ai+🎀+🤎+I+have+scammer's+number.+Please+add+his/her+number+in+your+bot🥰.
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ DRAXEN Ai*`);
                        
                        
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
