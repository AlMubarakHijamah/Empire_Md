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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_59_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlR4NWpoSDdkMHNXVThJcmMvdXZGM3F3VmxmREd1KytEeEZtandaeWcvST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGNRMkJkWXZTdjZOcTJIaFlIckh3UVwiLFxuICBcInBob25lSWRcIjogXCIzNWYwNjJmZS03NDdiLTRhNTYtYTU3OC1hOGQzOGUyZmQxZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgOCxcbiAgICAgIDQsXG4gICAgICAzNCxcbiAgICAgIDM2LFxuICAgICAgOTUsXG4gICAgICA5MCxcbiAgICAgIDU5LFxuICAgICAgMTUzLFxuICAgICAgMTYxLFxuICAgICAgMTcyLFxuICAgICAgMjUsXG4gICAgICAxMjgsXG4gICAgICA2NCxcbiAgICAgIDE2LFxuICAgICAgMTcxLFxuICAgICAgNjIsXG4gICAgICAxNzgsXG4gICAgICAyNTIsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAzMyxcbiAgICAgIDk5LFxuICAgICAgMTcyLFxuICAgICAgMTY2LFxuICAgICAgMjQ1LFxuICAgICAgNzQsXG4gICAgICAyMjMsXG4gICAgICAwLFxuICAgICAgMTYwLFxuICAgICAgNzMsXG4gICAgICAyNDQsXG4gICAgICAyMDEsXG4gICAgICA3NyxcbiAgICAgIDEzMSxcbiAgICAgIDE4NCxcbiAgICAgIDEyMSxcbiAgICAgIDEyMyxcbiAgICAgIDE3OSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWDQ1OEdOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MzcwNzY3ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjc3NzUwODcyNTU2Mzk6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJUdTk0QkVNVDhtTGtHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHcG05SUIrd0ZUaDJ3TFRKclNURUZYdnZsYzU5MndyR2FyVm82VkxSQVVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9JcTM3bnNjNUJxcGJnVHZzZk83em12dWJKUmp1ZlZVNVltWDIvRGZjOSs3NElCM1B3UlRnL24wM0NONW9UNUcxbUtVc0E2MVg2dWdXUThjblVoT0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpXdjZaM2UyNkg5bDRRY2Y3RGlJRUZkSFk1SGVFMDdmRVBTWU1TTndJdTNJdVVrTlNaOUZvSEt5dFUvZWcxUDBMdFpYc2t4SHhIbkNNcDF2cEFLZUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM3MDc2Nzg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1NTk1NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCZC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJkLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
