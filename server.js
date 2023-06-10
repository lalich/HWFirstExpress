const express = require("express") // requirements for app 
const app = express()


app.get('/greeting', (req, res) => {

       res.send(`Good Morning`) 
    })

app.get('/greeting/:name', (req, res) => {
        const name = req.params.name
            res.send(`Yo how you earnd that callingcard ${name}?`)
    })

app.get('/tip/:total/:percent', (req, res) => { // creates the path to use total and percent
    const total = req.params.total // makes the param total
    const percent = req.params.percent // makes the param percent
    const tipAmmount = (total * percent / 100)

        res.send(`Yo tip @ ${percent}% on a bill of $${total} should be $${tipAmmount.toFixed(2)}`)
})

app.get('/magic/:string', (req, res) => {
    const magicBallResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const string = req.params.string
    const magicResponse = magicBallResponse[Math.floor(Math.random() * magicBallResponse.length)]
    console.log(magicResponse) 
                res.send(`<h1>${magicResponse}</h1>`)
})



app.listen(4200, (req, res) => {
    console.log(`I am listening to your app`)
})


