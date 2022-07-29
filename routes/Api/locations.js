const router = require('express').Router();
const { Router } = require('express');
const { route } = require('.');
const {location, travellers, trips} = require('../models');

// GET all locations
router.get('/', async (req, res) => {
    try {
        const locationData = await location.findAll({
            include: [{model: location}],

        });
        res.status(200).json(locationData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// GET single location

router.get('/:id', async (req, res) => {
    try {
        const locationData = await location.findByPk(req.params.id, {
            include: [{model: location}],
        });
            if(!locationData) {
                res.status(404).json({message: 'Location not found'});
                return;
            }
            res.status(200).json(locationData);
        } catch (err) {
            res.status(500).json(err);
        }
    })

    //Create location
router.post('/', async (req, res) => {
    try {
        const locationData = await location.create({
            name: req.body.name,
        })
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE location

router.delete('/:id', async (req, res) =>{
    try {
        const locationData = await location.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!locationData) {
            res.status(404).json({ message: 'No location found with that search'});
            return;
        }
        
        res.status(200).json(locationData);
   }
   catch(err) {
        res.status(500).json(err);
   }
})
 

