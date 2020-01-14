const Dev = require('../src/model/Dev');

const stringAsArryay = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const dev = await Dev.find()

        return res.json("");
    }
}