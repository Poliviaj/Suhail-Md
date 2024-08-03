const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="poliviajeptoo@gmail.com"
global.location="Kapsabet,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || 
global.website=process.env.GURL || 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Eliakim Tech


global.devs = "254728705726" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728705726";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728705726,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_42_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk1LFxuICAgICAgICA1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjg4ZitsbGJMaG43eUEzc20xanJwalZWUWZkak1jcmdyUFVSYkJzY0NCaFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll4SzVJY1VGVGw2QUpPblcxaVlVLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDZiNWMwOWMtNDk2MC00OTdkLWFlM2MtMGI0NWM1NzdiODBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTU3LFxuICAgICAgMTksXG4gICAgICA1NSxcbiAgICAgIDI1MSxcbiAgICAgIDgxLFxuICAgICAgMCxcbiAgICAgIDIxNixcbiAgICAgIDE2NCxcbiAgICAgIDExLFxuICAgICAgMTI3LFxuICAgICAgMjM1LFxuICAgICAgMjM4LFxuICAgICAgMjM5LFxuICAgICAgMjA0LFxuICAgICAgNjcsXG4gICAgICA1LFxuICAgICAgMTcxLFxuICAgICAgMTcyLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDU5LFxuICAgICAgMTM4LFxuICAgICAgMTM2LFxuICAgICAgMjM4LFxuICAgICAgMTk5LFxuICAgICAgMjUsXG4gICAgICAxNDAsXG4gICAgICAyNTAsXG4gICAgICAxNixcbiAgICAgIDE4OSxcbiAgICAgIDE0NCxcbiAgICAgIDM3LFxuICAgICAgMTMwLFxuICAgICAgNjYsXG4gICAgICAxNjYsXG4gICAgICAyMTYsXG4gICAgICA3MCxcbiAgICAgIDk5LFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFQQVFLOVZNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mjg3MDU3MjY6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMTU2MTk1MjA1OTQ0Nzo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbnIrN2tCRU9Ma3VyVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlkZU4rMWFsdzNnWkg5RlBQMWZaYkVRdjZONFRuOFU0K0NHYW85bm01Z009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicThTZUpOUUFkVEdJTkw2aEd3YXdON0NHdHhtWWZRUmNGOFFOUENNKzA1cGErNytmYTZ6YWtJQWRJUVpxV1Y2TU03bUVBblZFa3UyRDZodzZjcFdEQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSUxvR0ZnN293aS9YemhRbE1MclJhQXI5VTVzVzBLMnpSREFKYnhkZnhPOURwNkI2bUlUUGJiMEV4M0VKaTlkTmdHRUswZG5ZZFpSRGhWdW1HdExUZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI4NzA1NzI2OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MjQ5NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMa2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxraC5qc29uIjogIntcImtleURhdGFcIjpcIkloOHg2d2QrNkdNaTZBM3ZNNHBKaFhZTk8rY00yUE1HeVovZ3V1Ui9zZ3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzkwMDAyMTIwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzA0ODk5NTgwXCJ9Igp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Eliakim-Tech",
  ownername:process.env.OWNER_NAME|| "Eliakim",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
