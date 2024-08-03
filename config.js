const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY ELIAKIM" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745931715";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254745931715,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_22_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiVHZrSmF2akMzc0RQQkhkNm1meEJVSUVQUVhRTmN3SDFpTjlaQ2xFdnY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5Rm9FVHdJRVF3dTFwekVKS0diajRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3YWI2NmYyLTExMjctNGJhMC05NDk0LTJkODA2NGQzMGVkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA0MCxcbiAgICAgIDEzNixcbiAgICAgIDY2LFxuICAgICAgMTA0LFxuICAgICAgODcsXG4gICAgICAyNDIsXG4gICAgICA4LFxuICAgICAgMTg0LFxuICAgICAgNyxcbiAgICAgIDU5LFxuICAgICAgMTkxLFxuICAgICAgNzAsXG4gICAgICAxMTIsXG4gICAgICA0MyxcbiAgICAgIDE3OSxcbiAgICAgIDIwLFxuICAgICAgMTc5LFxuICAgICAgMjA5LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMjE5LFxuICAgICAgMTk2LFxuICAgICAgNTIsXG4gICAgICAyMzksXG4gICAgICAxNzYsXG4gICAgICAyNTUsXG4gICAgICAyMTQsXG4gICAgICAxNSxcbiAgICAgIDE5NyxcbiAgICAgIDEyLFxuICAgICAgMTc3LFxuICAgICAgMTkzLFxuICAgICAgMTAsXG4gICAgICAxNjAsXG4gICAgICA4MyxcbiAgICAgIDEyMyxcbiAgICAgIDcwLFxuICAgICAgNSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3NEdSVEpSRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1OTMxNzE1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJAZmF5ZXpcIixcbiAgICBcImxpZFwiOiBcIjE3OTc3NDkxNTg4NzIxMzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096eDlaMEJFS1dXdWJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmdWMjlMSDNtWTM3NGpKMHN3QmdMdUF4VTdkbUtqQzVpVUl0S3FGUVgybz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHUVRjMGZLN1lGTmc1OU5UTHZGbS9xNURGd3BYZ3dhNTBJOEd6TTNHSm1DdkYrYlYzaGpKd1MwdGdFbG9zejhhc2xQc2FtMzdJblphck0wQ1dLUnZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNNXdXYzhaTmxoVzdHR3prZ1RCQ0xwMWIxZzR2azFzRDM2WG5IWmx3RE9zZmIzcUVCQnZPUmlKbFNaUnRINzgyUk5GSWlqRUI3Ykoyek9XdjRRYndDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU5MzE3MTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjk4NTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2FZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLYVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLTXdwWS8zQ3dHaTJqQzlXQk1wUjJJZXNvcVNZUS9SRDBnaEdDRFZPKzRzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzMTE4NDM2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjU5NDM4OTkyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" 
  
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ELIA-TECH",
  ownername:process.env.OWNER_NAME|| "ELIAKIM",


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
