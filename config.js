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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "14143066181";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_09_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICA0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhxNDN5VEN2MFNvYlVsYWxxbUNlMEs1ZEpUQWVDZ2pqNGhKTW54STJNMXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJLeDBrUmVFUTcydUN6M3VHeDFzbEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWNiY2Y4OGUtNWNiZS00ZDViLWI3YjgtNTIwNWU5NjMwYWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDUsXG4gICAgICAxNjEsXG4gICAgICA2MSxcbiAgICAgIDE2MixcbiAgICAgIDE0OSxcbiAgICAgIDIzMyxcbiAgICAgIDIyNSxcbiAgICAgIDIzOSxcbiAgICAgIDEzOSxcbiAgICAgIDM2LFxuICAgICAgMTY1LFxuICAgICAgMyxcbiAgICAgIDgxLFxuICAgICAgMjM2LFxuICAgICAgNzYsXG4gICAgICAxMDIsXG4gICAgICAxNjcsXG4gICAgICAxNjIsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxMzQsXG4gICAgICAxNjksXG4gICAgICAzMSxcbiAgICAgIDIyMyxcbiAgICAgIDIwOSxcbiAgICAgIDUwLFxuICAgICAgNDMsXG4gICAgICAzNSxcbiAgICAgIDkzLFxuICAgICAgMTI5LFxuICAgICAgMTM1LFxuICAgICAgMzMsXG4gICAgICA5MSxcbiAgICAgIDM2LFxuICAgICAgMjQ2LFxuICAgICAgODAsXG4gICAgICAyMjQsXG4gICAgICA3OCxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTN0NOUVRZVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTQxNDMwNjYxODE6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNw7bEm1wiLFxuICAgIFwibGlkXCI6IFwiMzE1MTIzNzYzOTc5Njk6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUhIODlzQ0VNZWpqN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlRjZISHU5Yi9qejZ1QjFCdHUveG1wV056UDQ3cWlOZ083NWFjTEhTU0dJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdPcHNzb24ydUtHZUlKUlVzWEJKVGgzSjYzeXZxVEpBQ3ZINUpSZ1NpTHllVXoyNHFzbitIbnpyYVhRZ1pOUnVTRXBmaXE2bG9pZHd2Zi80K2liU0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImg4SHhXTlJ3Rmd2QzZHU29FWnNtQTNiZEhCRjNtVzY3N3B2bTU1NEloRHdPSnZra0hNQ1FXRUttTDdxeHJXUXNTSHN2dXhFSnhjTWZ2NUg1RTN3a0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0MTQzMDY2MTgxOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MTQ5NTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Moeeee",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MöéViippëër,


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public"
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
