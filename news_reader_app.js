// Use this sample to create your own voice commands
intent("What does this app do?","What can i do here?",reply("This is a news project."))
// intent('Start a command',(p)=>{
//     p.play({command:'test'})
// })
let savedArticles=[]
const API_KEY="ca832cb68cf44735b322aab943913702"
intent("Give the new from $(source* (.*))",(p)=>{
    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`
    if(p.source.value){
        NEWS_API_URL=`${NEWS_API_URL}/&sources=${p.source.value.toLowerCase().split(" ").join("-")}`
    }
    api.request(NEWS_API_URL,(error,response,body)=>{
        const {articles} = JSON.parse(body)
        if(!articles.length){
            p.play("Sorry , ^please try searching news from a different ressource")
            return
        }
        savedArticles=articles
    })
    
})