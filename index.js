const express = require('express')
const path = require('path')
const { db } = require('./db/models')
const { urlRoute } = require('./api/index')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', urlRoute)
app.use('/', express.static(path.join(__dirname, 'public')))

db.sync()
.then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(port));
})
.catch((err) =>{
    console.error(err);
})
