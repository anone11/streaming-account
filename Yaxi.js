
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `‎ ,ًرئيس ,ًالجمهورية ,ًدیسکورد ,ًقائد ,ًجميع ,ًالقوات ,ًالمسلحة ,ًوالمتطوعين` ,
`XAZABm` ,
`RASHA UP`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("881207625541378088"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("NzcyMDk2MzA0NjI0NDM1MjEw.YS0QDA.P-A8sseItBYv1MQlp3Vzh_Zb3Rs");
