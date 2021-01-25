const {mod} = require('../db/models')
const shortid = require('shortid');

async function shorten(url) {
    try{
        const newurl = await mod.create({
            full: url,
            short: shortid.generate()
        })
        console.log(newurl)
        return newurl.short
    }
    catch (e){
        console.error(e)
    }
}

async function enlarge(url) {
    const oldurl = await mod.findOne({where: {short: url}})
    return oldurl.full
}

module.exports = {shorten, enlarge}