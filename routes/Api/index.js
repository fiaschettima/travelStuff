const router = require('express').Router();
const locationRoutes = require('./locations');
const travellerRoutes = require('./travellers');
const tripRoutes = require('./trips')

router.use('/locations', locationRoutes);
router.use('/cards', travellerRoutes);
router.use('./trips', tripRoutes)

module.exports = router;