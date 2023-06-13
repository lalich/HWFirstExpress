const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>'); // this is the main landing page(99BoB)

})

app.get('/:numbottles', (req, res) => {     // bottles count down page(s)
    const bottles = parseInt(req.params.numbottles)  // creates variable from the new url in the countdown
    const bottlesleft = bottles - 1 // gives the next nu,ber of bottles after passing one down
    console.log(bottlesleft) // check if working
        let link = ''  // creates loop link to take one down pass it around
        if (bottlesleft >= 0) {   // ensures loop has an end point
            link = `<a href="/${bottlesleft}">Take one down, pass it around!</a>`  // link using the new bottle count to new page
        }

        res.send(`<h1> ${bottles} Bottles of beer on the wall.</h1>${link}<br><a href="/">Start over</a>`)     // post H1 with current number of bottles
            

    })

    

app.listen(420, (req, res) => {
    console.log('Yo I am gittin it brah')
})