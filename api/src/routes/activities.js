const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

router.post('/', async (req, res, next) => {

    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;

    try {
        let activity = await Activity.create({ name, difficulty, duration, season })
        await activity.setCountries(countries)

        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        res.json(activityWithCountry)
    } catch (error) {
        next(error)
    }

});

module.exports = router;