const {Router} = require('express');

const Dev = require('./src/models/Dev');

const DevController = require('./src/controllers/DevController');
const SearchController = require('./src/controllers/Search');

const routes = Router();

routes.get('/all', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;