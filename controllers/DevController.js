const axios = required('axios');
const Dev = require('../src/model/Dev');
const arrayAsString = require('../utils/parseStringAsArray');

module.exports = {

    async indexedDB(req, res){
        const dev = await Dev.find();

        return res.json(dev);
    },

    async storage(req, res) {
        const { githubUserName, tech, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ githubUserName });

        if(!dev){
            const response = await axios.get(`https://api.github.com/users/${githubUserName}`);
        
            const { name = login, avatar_url, bio } = response.data;
            
            const techsArray  = arrayAsString(techs);
            
            const location =  {type: 'Point', coordinates: [longitude, latitude]}
            
            dev = await Dev.create({
                githubUserName,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }                
        return res.json(dev);
    }
}
