const { Router } = require('express');
const routes = Router();
const DevController = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController')

routes.get('/dev', DevController.index)
routes.post('/dev', DevController.storage);

routes.get('/search', SearchController.index);

module.exports = routes;