const Dev = require('../src/model/Dev');

const stringAsArryay = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const { techs, latitude, longitude } = req.query;

        const techArrays = stringAsArryay(techs);

        const dev = await Dev.find({
            $in: techArrays
        });

        return res.json(dev);
    }
}