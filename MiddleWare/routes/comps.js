const express = require('express')
const router = express.Router()
const Comp = require('../models/comp')

// find all
router.get('/', async (req, res) => {
    try {
        const comps = await Comp.find()
        res.json(comps)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// find by comp number
router.get('/:id', getComp, (req, res) => {
    res.json(req.comp)
})

router.post('/', async (req, res) => {
     const compX = new Comp()
    Object.keys(req.body).forEach(k => compX[k] = req.body[k]);
    try {
        const newComp = await compX.save()
        res.status(201).json(newComp)
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
})

router.post('/:id', getComp, async (req, res) => {
    Object.keys(req.body).forEach(k => req.comp[k] = req.body[k]);

    try {
        let updatedComp = await req.comp.save()
        res.json(updatedComp)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getComp, async (req, res) => {
    try {
        await req.comp.remove()
        res.json({ message: 'Deleted Comp: ' + comp.id })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getComp(req, res, next) {
    try {
        comp = await Comp.findById(req.params.id)
        if (comp == null) {
            return res.status(404).json({ message: 'Cannot find computer' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    req.comp = comp
    next()
}

module.exports = router