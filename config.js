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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_03_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRaSWZ5YlJKMEFxN1NOMUpMUjFYakFyaXBaS0pCRThaeHpGSlJtWlhQRE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRRQnJEaF9XUjlDc19tSEdLOHo2cFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzgwM2E5M2EtMWI1Yy00ZGM1LWFhMmEtMTg2ODA4M2Q2MTk0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMjM0LFxuICAgICAgOTgsXG4gICAgICAxMjQsXG4gICAgICAxNTIsXG4gICAgICAyMzksXG4gICAgICAzMixcbiAgICAgIDEwNSxcbiAgICAgIDUzLFxuICAgICAgMzQsXG4gICAgICA5NixcbiAgICAgIDQ4LFxuICAgICAgNjAsXG4gICAgICAxODksXG4gICAgICAyMDksXG4gICAgICAxNjUsXG4gICAgICAxMTIsXG4gICAgICA3MyxcbiAgICAgIDc1LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgNjcsXG4gICAgICAxMjcsXG4gICAgICAxODIsXG4gICAgICAxMTAsXG4gICAgICAxOTIsXG4gICAgICA2NSxcbiAgICAgIDY1LFxuICAgICAgOTksXG4gICAgICAyMjcsXG4gICAgICAxOTcsXG4gICAgICA5OCxcbiAgICAgIDE3OSxcbiAgICAgIDAsXG4gICAgICA2MSxcbiAgICAgIDE4NCxcbiAgICAgIDIxNCxcbiAgICAgIDI0MCxcbiAgICAgIDQ5LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEo3Vjc1TExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjMxNzI4MDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NzU5NDEwNTQ2MDc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK21rTjhIRUlEbDJic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInkwQnltdUhWdE11WUZtTHBpMTN4WG50ai9lSTBzdDRNc2doamtVRCttQzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWS9yVzNReC85c0Z2ZXZmZndmZlpTT05EenpOZXJNSUlKL1JqM040TDBJaDVaKzAzU3Z2cnp0SGk3eTRZQUwzNjBiL2lwbHFvdXVDMlEwY0lob2JCQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOURRWDRHR3RTQkFTMTBBeW9TU09XMjd1Tkhtd1djS0JEL1l0Vi9Wd3E0N215UlBjNUhKQnJzTG8zZGFMZXhyb3RVZ1Y0ME5OV090dHZScXpRbkJPaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzE3MjgwMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU4MTU4MTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
