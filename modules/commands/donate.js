 module.exports.config = {
  name: "donate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "Thông tin admin bot ^^",
  commandCategory: "ad",
  usages: "donate",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/y8XphLFR/z2930463615287-e70f637ab848a28524f3287389bc61bf.jpg",
     ];
     var callback = () => api.sendMessage({body:`梁Ủ𝐍𝐆 𝐇Ộ 𝐀𝐃𝐌𝐈𝐍 𝐌𝐔𝐀 𝐌Ì 𝐓Ô𝐌梁
✔ᴅᴏɴᴀᴛᴇ:
💳ᴍʙ: 0399006036
📲Momo: 0399006036
---- 𝓝𝓰𝓾𝔂𝓮̂̃𝓷 𝓗𝓾̛̃𝓾 𝓚𝓲𝓮̂̀𝓾 𝓛𝓸̣̂𝓬 ----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
