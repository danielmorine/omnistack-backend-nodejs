const axios = require('axios');
const Dev = require('../src/model/Dev');
const arrayAsString = require('../utils/parseStringAsArray');

module.exports = {

    async index(req, res){
        const dev = await Dev.find();

        return res.json(dev);
    },

    async put(req, res){
        const { githubUserName, techs, latitude, longitude } = req.body;

        const location = { type: 'Point', coordinates: [longitude, latitude] };
        const techsArray  = arrayAsString(techs);

        const oldDeveloper = await Dev.find({ } ,{githubUserName});
 
       var result = await Dev.update({_id: oldDeveloper[0]._id }, { $set: { location, techs: techsArray }});

            
        return res.json("Update");
    },

    async destroy(req, res){
        const { githubUserName } = req.body;

        Dev.deleteOne({ _id: githubUserName });

        const developers = Dev.find();

        return res.json(developers);
    },

    async storage(req, res) {
        const { githubUserName, techs, latitude, longitude } = req.body;

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
