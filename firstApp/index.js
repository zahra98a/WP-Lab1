const express = require('express')
const app = express()
const port = 4000


//app.get('/', (req, res) => res.send('Hello World from Zahra! how are you doing?'))
app.get('/bananas', (req, res) => res.send('hello world, this is bananas'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
