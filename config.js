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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_23_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDU5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndSOTJyUy9EZTFVdGtXOVIyT1EwWTluRFF3YmdINWdqRjRwRXMwNnhUNm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkk0aGRjYnRhUVZTYW56ZnJ1TTEzdndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDVjNmY4ZWItMjhlNC00NzVhLTkwMDEtODJjOWRjY2FkZjk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxMTYsXG4gICAgICAzMixcbiAgICAgIDIwMixcbiAgICAgIDE1NSxcbiAgICAgIDE4MSxcbiAgICAgIDMyLFxuICAgICAgNTAsXG4gICAgICA1OSxcbiAgICAgIDI1MixcbiAgICAgIDEwOSxcbiAgICAgIDIzNSxcbiAgICAgIDAsXG4gICAgICAxNzcsXG4gICAgICAxNzAsXG4gICAgICA5MyxcbiAgICAgIDIzNSxcbiAgICAgIDExOSxcbiAgICAgIDE4NSxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDM1LFxuICAgICAgMzQsXG4gICAgICAxMzgsXG4gICAgICAyMDcsXG4gICAgICAxNzIsXG4gICAgICAyNixcbiAgICAgIDI0NCxcbiAgICAgIDEzOCxcbiAgICAgIDI0MSxcbiAgICAgIDIzMSxcbiAgICAgIDEyNixcbiAgICAgIDIxMCxcbiAgICAgIDEzOCxcbiAgICAgIDE1MixcbiAgICAgIDE4NSxcbiAgICAgIDE2NixcbiAgICAgIDExMyxcbiAgICAgIDE2NyxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1HN0JFWThCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDg1ODU0ODk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MzkzOTQwNTAzMzU0NDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTEFydVlFRVBPcnRMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtSVFFOTm5WVWlieWFQUFNXNEEwdkJ3eGJ5eU9LVXprRGltbDUvS1R6bHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXlBZVdWRE9jODhUaGVINWF1eHpsNTdGcFJUM3R0bGhYNXpVSWNZRTM5d2hqckJHN1pXekFIYXQrTmZFeW9NL3h4eDB5K1JYbDNndXpSNkhncWVjQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUGJjVzdGM09UeVJqMG9tQnRpS29WZkNRWXJ2OUZCMFZuMHVKRzRaV2NIeERpZnNRMkZyY0NhYkJKcHBYZ1hIeEF3VkRHSHhiU1JPVFhSc2RPNDNmRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ4NTg1NDg5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYxOTM4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5RY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlFjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGJJZmlSbEhoY2VCL3dNTzQrc2N0eGpua0JUWXA3V3p2M0s3TTVQM2R1OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg4NDEzMjQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
