const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163172801";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_00_02_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRodzF2UWlvRGQ2aG4yWXBhZ2hiVGpSdWpzNDN4Y3AyUThrMnRwSU1TT2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MzE3MjgwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEZBREMzQURFNDg3NzlGQUIxOUJBMTMwOEFFODkzQkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM5MDIzMjIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhONmV6NUVqVEwtbHdOdnlndjJQbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmEwZDRhNmMtMzJhNS00ZjhmLWFlMTgtZjI1MjAwYjI4MTg1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDExMyxcbiAgICAgIDE3OCxcbiAgICAgIDY1LFxuICAgICAgNTksXG4gICAgICA5NSxcbiAgICAgIDQzLFxuICAgICAgNTIsXG4gICAgICAxNjAsXG4gICAgICAxMzEsXG4gICAgICAzNSxcbiAgICAgIDMzLFxuICAgICAgNDMsXG4gICAgICA1NyxcbiAgICAgIDkxLFxuICAgICAgMzgsXG4gICAgICAyNDYsXG4gICAgICAxMzUsXG4gICAgICA1OSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDE1NyxcbiAgICAgIDgxLFxuICAgICAgMjUxLFxuICAgICAgNDgsXG4gICAgICAxODcsXG4gICAgICAxMDYsXG4gICAgICAxNSxcbiAgICAgIDE0NixcbiAgICAgIDEzMSxcbiAgICAgIDcwLFxuICAgICAgMTk4LFxuICAgICAgMTYwLFxuICAgICAgMTcxLFxuICAgICAgMTM5LFxuICAgICAgMTA4LFxuICAgICAgMTUyLFxuICAgICAgMTEsXG4gICAgICAxMzQsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGWjYyR1JMM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MzE3MjgwMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk3NTk0MTA1NDYwNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDbWtOOEhFTzdHbmIwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieTBCeW11SFZ0TXVZRm1McGkxM3hYbnRqL2VJMHN0NE1zZ2hqa1VEK21DOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtYWI5dW02cmlVOWREQzVxdHNsaEozWlkxdUpHNHJCbWpqRmdyWVJJL2VLMDlqczgyZGdyczYrb1dNd1d5ZXlnK3ozQWFjTU5aYmpDMzBpaTRjbEpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvYk5YMHN6TVR1aFV5VWZ0VHVUWkJuLzc3NWwvTzlSbXVHbENLYlJTMXpobUIzSTBOd1l6ak5jcGhWUzhmWkt1b2U5bVo4Vmxvck1SSmE4YnBraVJCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYzMTcyODAxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTAyMzIxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9TY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1NjLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHlJT051b1piS1crUkxMNWIxRHBwcXBIcHY3RGcwM0lRQ29LZ1F0QWFCST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDc4NTQ0NzUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU4MTU4MzMxODVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
