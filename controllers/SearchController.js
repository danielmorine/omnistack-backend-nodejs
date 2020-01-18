const Dev = require('../src/model/Dev');

const stringAsArryay = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const { techs, latitude, longitude } = req.query;
        const techArrays = stringAsArryay(techs);

        const dev = await Dev.find({
            techs: {
                $in: techArrays
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 100000
                },
            },
        });
        return res.json(dev);
    }
}