 module.exports.config = {
  name: "donate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "Thรดng tin admin bot ^^",
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
     var callback = () => api.sendMessage({body:`๏ฅบแปฆ๐๐ ๐แป ๐๐๐๐๐ ๐๐๐ ๐ร ๐ร๐๏ฅบ
โแดแดษดแดแดแด:
๐ณแดส: 0399006036
๐ฒMomo: 0399006036
---- ๐๐ฐ๐พ๐๐ฎฬฬ๐ท ๐๐พฬฬ๐พ ๐๐ฒ๐ฎฬฬ๐พ ๐๐ธฬฃฬ๐ฌ ----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
