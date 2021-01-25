const route = require('express').Router()
const {shorten, enlarge} = require('../controllers/index')

route.get('/:url', async (req, res) => {
    const oldurl = await enlarge(req.params.url)
    res.status(301).redirect(oldurl)
})

route.post('/', async (req, res) => {
    const newurl = await shorten(req.body.url)
    res.send(newurl)
})

module.exports = {urlRoute: route}