const express = require("express") // requirements for app 
const app = express()


app.get('/greeting', (req, res) => {

       res.send(`Good Morning`) 
    })

app.get('/greeting/:name', (req, res) => {
        const name = req.params.name
            res.send(`Yo how you earnd that callingcard ${name}?`)
    })



app.listen(4200, (req, res) => {
    console.log(`I am listening to your app`)
})


