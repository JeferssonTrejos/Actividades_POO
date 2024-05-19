const express = require('express');
const ruta = express.Router();
const Vivienda = require('../models/viviendas');

// Obtener todo
ruta.get('/', async (req, res) => {
    try {
        const viviendas = await Vivienda.find();
        res.json(viviendas);

        console.log(`------------ GET En ruta '/' ------------`);
        console.log(viviendas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Guadar
ruta.post('/', async (req, res) => {
    const vivienda = new Vivienda(req.body)
    try {
        const nuevaVivienda = await vivienda.save()
        res.status(201).json(nuevaVivienda);

        console.log(`------------ POST En ruta '/' ------------`);
        console.log(nuevaVivienda);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Obtener por ID
ruta.get('/:id', getVivienda, (req, res) => {
    res.json(res.vivienda);

    console.log(`------------ GET En ruta '/:id' ------------`);
    console.log(res.vivienda);
});

async function getVivienda(req, res, next) {
    let vivienda;
    try {
        vivienda = await Vivienda.findById(req.query.id)
        if (vivienda == null) {
            return res.status(404).json({ message: 'vivienda no encontrada' })
        }
    } catch (error) {
        return res.status(500).json({ messageerror: error.message })
    }
    res.vivienda = vivienda;
    next();
};

// Actualizar por ID
ruta.put('/:id', getVivienda, async (req, res) => {
    Object.keys(req.body).forEach(key => {
        if (req.body[key] != null) {
            if (key === 'direccion') {
                Object.keys(req.body.direccion).forEach(subKey => {
                    if (req.body.direccion[subKey] != null) {
                        res.vivienda.direccion[subKey] = req.body.direccion[subKey];
                    }
                });
            } else {
                res.vivienda[key] = req.body[key];
            }
        }
    });
    try {
        const nuevaVivienda = await res.vivienda.save()
        res.status(201).json(nuevaVivienda);

        console.log(`------------ PUT En ruta '/:id' ------------`);
        console.log(nuevaVivienda);
    } catch (error) {
        res.status(500).send(error.message)
    }
});

// Eleminar por ID
ruta.delete('/:id', async (req, res) => {
    try {
        const deleteVivienda = await Vivienda.findByIdAndDelete(req.query.id)
        res.status(201).json(deleteVivienda);
        
        console.log(`------------ DELETE En ruta '/:id' ------------`);
        console.log(deleteVivienda);
    } catch (error) {
        res.status(500).send(error.message)
    }
});

module.exports = ruta

