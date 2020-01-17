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

        const developer = Dev.find({githubUserName});
        
        console.log(developer._id);
        Dev.update({_id: developer._id }, { $set: { location, techs: techsArray }});

        //const developer = Dev.findOne({_id: githubUserName });
            
        return res.json("Atualizei");
    },

    async destroy(req, res){
        const { githubUserName } = req.body;

        Dev.deleteOne({ _id: githubUserName });

        const developers = Dev.find();

        return res.json(developers);
    },

    async storage(req, res) {
        const { githubUserName, techs, latitude, longitude, name, bio } = req.body;

        let dev = await Dev.findOne({ githubUserName });

        if(!dev){
            const response = await axios.get(`https://api.github.com/users/${githubUserName}`);
        
            const { avatar_url } = response.data;
            
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
