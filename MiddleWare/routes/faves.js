const express = require('express')
const router = express.Router()
const Fave = require('../models/fave')

// find all faves by user email
router.get('/get', (req, res) => {
    // res.json(req.fave)

    Fave.aggregate([
        {
          '$lookup': {
            'from': 'users', 
            'localField': 'userId', 
            'foreignField': '_id', 
            'as': 'theBloodyUser'
          }
        }, {
          '$lookup': {
            'from': 'comps', 
            'localField': 'compId', 
            'foreignField': '_id', 
            'as': 'theBloodyComp'
          }
        }
      ]).exec((err, data) => {  
          res.send(data);
      })
})

//add to faves
router.post('/add/', async (req, res) => {
     const faveX = new Fave()
    Object.keys(req.body).forEach(k => faveX[k] = req.body[k]);
    try {
        const newFave = await faveX.save()
        res.status(201).json(newFave)
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
})

//remove from faves
router.delete('/:email/:compNo', getFave, async (req, res) => {
    try {
        await req.fave.remove()
        res.json({ message: 'Deleted Fave: ' + fave.compNo })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getFave(req, res, next) {
    try {
        fave = await Fave.findById(req.params.email)
        if (fave == null) {
            return res.status(404).json({ message: 'Cannot find computer' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    req.fave = fave
    next()
}

module.exports = router