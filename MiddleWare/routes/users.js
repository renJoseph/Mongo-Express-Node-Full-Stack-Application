const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/get/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/get/:email/:password', getUserByEmail, async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (err){
        res.status(404).json({ message : err.message})
    }
})

router.post('/create/', async (req, res) => {
    const userX = new User()
    Object.keys(req.body).forEach(k => userX[k] = req.body[k]);
    try {
        const newUser = await userX.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// router.post('/:id', getUserByID, async (req, res) => {
router.post('/update/:email', getUserByEmail, async (req, res) => {
    Object.keys(req.body).forEach(k => req.user[k] = req.body[k]);

    try {
        let updatedUser = await req.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// router.delete('/:id', getUserByID, async (req, res) => {
router.delete('/:email', getUserByEmail, async (req, res) => {
    try {
        await req.user.remove()
        // res.json({ message: 'Deleted User : ' + user.id })
        res.json({ message: 'Deleted account with email : ' + user.email })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// async function getUserByID(req, res, next) {
async function getUserByEmail(req, res, next) {
    try {
        // user = await User.findById(req.params.id)
        user = await User.findOne({ email: req.params.email })
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    req.user = user
    next()
}

module.exports = router