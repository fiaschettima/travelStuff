const Location = require('./location');
const Traveller = require('./travellers');
const Trip = require('./trips');

Location.belongsToMany(Traveller,{
    through: 'Trip',
});
Traveller.belongsToMany(Location,{
    through: 'Trip',
});

module.exports = {Location, Traveller, Trip}