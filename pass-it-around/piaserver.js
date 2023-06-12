const express = require('express')
const app = express()

app.get('/:bottles', (req, res) => {
    const bottles = req.params.bottles
    res.send(`<h1> ${bottles} of beer on the wall</h1>`)

})





app.listen(420, (req, res) => {
    console.log('Yo I am gittin it brah')
})