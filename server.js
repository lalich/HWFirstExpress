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

app.listen(4200, (req, res) => {
    console.log(`I am listening to your app`)
})


