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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348114918337";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_32_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1MS9Wc2hDK2Rqa2ZId1kvNytsNXRPbjRCWGRzdEZGeU1WT3VMYkMwZHU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlbHdqV0V3dlFoYWhsbEtMVzlNN1hBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjNzVjOGQ2LWYyZmUtNDExMy1iN2ZlLWM1N2NlZmIyMzA3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDEyNSxcbiAgICAgIDExMixcbiAgICAgIDIzNSxcbiAgICAgIDIyNyxcbiAgICAgIDE4NixcbiAgICAgIDg0LFxuICAgICAgMjE5LFxuICAgICAgMTQsXG4gICAgICAyNTAsXG4gICAgICA1MyxcbiAgICAgIDAsXG4gICAgICAxOTAsXG4gICAgICA1MSxcbiAgICAgIDI0NCxcbiAgICAgIDEyOSxcbiAgICAgIDczLFxuICAgICAgNDQsXG4gICAgICAxOTcsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDYzLFxuICAgICAgODMsXG4gICAgICAxMDYsXG4gICAgICAxMjAsXG4gICAgICAxMjIsXG4gICAgICAxOTksXG4gICAgICA1NyxcbiAgICAgIDIzMixcbiAgICAgIDIwMixcbiAgICAgIDEzMyxcbiAgICAgIDI0MyxcbiAgICAgIDc2LFxuICAgICAgMjMzLFxuICAgICAgMTY3LFxuICAgICAgNjYsXG4gICAgICAyNSxcbiAgICAgIDExMyxcbiAgICAgIDkwLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdZVE0yUlg5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTE0OTE4MzM3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbC1NdWJhcmFrIEhpasSBbWFoIGFuZCBOYXR1cm9wYXRoaWMgSG9tZVwiLFxuICAgIFwibGlkXCI6IFwiNzA3Mzg3ODI5MDY3Njo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ptZTI1b0ZFTTZmZ0xzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibDQzUU12VDYvbVV3UDQ2a0VieFFCcHpCSG5BNWZpY3hQcmNrN3hvTFBtaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlbUhQWStEZy91SDJ6RDB5NVdzWnNVZWgvM21Wb1BaQllNZGQ0R3JQTWxuNkhVQ3paUDgranp5WTBOOCtjcDAwYzRPL0ZrcDNZdThkSmkweUJ0ZWRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwTE1DQWM1TmFyL0kvZWt6bC9TSVhPQkpjU1YrUlBMOWtEZDhBVlQ0cHp1SzExODVDRzlzWDRtZUVYSldzK0dQTkw4QXdSSVBTZ0QwMXdqbzJ3K1lBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE0OTE4MzM3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDM0ODc1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
