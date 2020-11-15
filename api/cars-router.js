const express = require('express')

const router = express.Router()
const db = require('../data/db-config.js')

router.use(express.json())

db.on('query', (data) => {
    console.log(data)
})

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars')
        res.status(200).json(cars)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error with db", error: error
        })
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const [car] = await db.select('*').from('cars').where({id})
        if (car) {
            res.status(200).json(car)
        } else {
            res.status(404).json({
                message: 'car not found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'a db error occured'
        })
    }
})

router.post('/', async (req, res) => {
    const newCar = req.body
    try {
        const car = await db.insert(newCar).into('cars')
        res.status(200).json({
            message:'car added to db', id: car
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'a db error occured'
        })
    }
})

module.exports = router