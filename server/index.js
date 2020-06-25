const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Post - Hello World!'))
app.delete('/', (req, res) => res.send('Delete - Hello World!'))
app.put('/', (req, res) => res.send('put - Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))