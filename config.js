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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163707678";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_10_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklqeUFESTVlM1J6TnVHTjZzUE10TjdxRk9UbUxWenRBSy9KMDE0MlRTU0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdJUEdJY0JMVFRlNU95X1FrdlZGdFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjg5NzU5ZWEtNzA5YS00OGEzLTliNjUtYWU5NmFhZjZhODQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDE2MSxcbiAgICAgIDExMyxcbiAgICAgIDcsXG4gICAgICAyMzYsXG4gICAgICAyMTAsXG4gICAgICA0MSxcbiAgICAgIDk2LFxuICAgICAgMTczLFxuICAgICAgMjIzLFxuICAgICAgMTc4LFxuICAgICAgOTEsXG4gICAgICAyMjksXG4gICAgICAyNixcbiAgICAgIDE1NSxcbiAgICAgIDM1LFxuICAgICAgNTksXG4gICAgICA0OSxcbiAgICAgIDE4MyxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMjI3LFxuICAgICAgMjExLFxuICAgICAgMTcyLFxuICAgICAgMTkxLFxuICAgICAgMjM4LFxuICAgICAgMjAzLFxuICAgICAgMTU4LFxuICAgICAgOTUsXG4gICAgICAxNTAsXG4gICAgICAyMzIsXG4gICAgICAwLFxuICAgICAgNCxcbiAgICAgIDIzOCxcbiAgICAgIDIzMCxcbiAgICAgIDE1OSxcbiAgICAgIDMsXG4gICAgICA2MyxcbiAgICAgIDE5LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI5Q0pBOUZXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNzA3Njc4OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2Nzc3NTA4NzI1NTYzOToyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZlR1OTRCRUxDbm5Ma0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdwbTlJQit3RlRoMndMVEpyU1RFRlh2dmxjNTkyd3JHYXJWbzZWTFJBVWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0hLSXNvaVFwc2t0QldZakFHQjBGcXFtTUJvNGduYXc2NnFJV0RaUmJKZUFiRUR6Q3lxY0NkTnFEQnM3MlhER1A3U0FJa0U0WkI2UHdHZmhNK1NDQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVBiNTBiZmN4U3J0b05TSnJyQllMd2tqL0JWd0o1SURiaDNXa0VRVFNrcVNFNXdscW45Q3o2YmhpLzY0UnVrWlpOVzFJdDF2VjROUTh0cWZxMmxCZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzcwNzY3ODoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYxNDE5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJkL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmQvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
