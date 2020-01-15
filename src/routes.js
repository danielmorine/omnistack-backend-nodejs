const { Router } = require('express');
const DevController = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController')

var routes = Router();

routes.get('/dev', DevController.index)
routes.post('/dev', DevController.storage);
routes.put('/dev', DevController.put);
routes.delete('/dev', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;