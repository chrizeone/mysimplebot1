const Discord= require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client()


const mlh = ["computer science","python","data science","java","kotlin","c++","c#","algebra","math","go"]
const init =[
  "",
  "you are our next future go ahead",
  "future leader is here",
  "the man go apex surely",
  "the member of our build future",
  "go for next project you will do it"
]

client.on("ready",() =>{
  console.log(`Logged in as ${client.user.tag}!!!`)
  })
client.on("message",msg => {
  if(msg.author.bot)return 
  if(mlh.some(word => msg.content.includes(word))){

    const randomMessage = init[Math.floor(Math.random() * init.length)]
    msg.reply("You are in MLH INIT 2022 shahi server let's rock!!             Tell me What's your :Subject ")
    msg.reply(randomMessage)

     
  }
  else
   msg.reply("find something tech or something else")
  
})


client.login(process.env.TOKEN)
