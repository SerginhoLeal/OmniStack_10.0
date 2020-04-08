const Dev = require('../models/Dev');
const parseString = require('../controllers/parseString');

module.exports = {
    async index(req, res){
        const {latitude, longitude, techs} = req.query;

        const desc = parseString(techs);

        const devs = await Dev.find({
            techs:{
                $in:desc,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance:10000,
                },
            },
        });

        return res.json({devs});
    }
}