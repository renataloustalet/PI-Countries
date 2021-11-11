const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();

router.get('/', (req, res, next) => {
    Country.findAll()
        .then((countries) => res.json(countries))
        .catch((e) => next(e))
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    let countries

    try {
        if (id.length) {
            countries = await Country.findByPk(id, {
                include: Activity
            })
        }
        return res.json(countries)
    } catch (error) {
        next(error)
    }
});

module.exports = router;