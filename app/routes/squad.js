const express = require('express')
const Squad = require('../model/squad')

const router = express.Router()

router.post('/create', async (req,res) => {
    let { squadName, employeesIDS } = req.body

    if (!squadName) {
        try {
            let squad = new Squad({employees: employeesIDS})
            await squad.save()
            res.status(200).json(await Squad.findById(squad._id).populate('employees'))
        } catch (error) {
            console.error(error)
            res.status(500).json({error: 'Problem to create a new squad'})
        }
    } else {
        try {
             let squad = new Squad({name: squadName, employees: employeesIDS})
             await squad.save()
             res.status(200).json(await Squad.findById(squad._id).populate('employees'))
         } catch (error) {
             console.error(error)
             res.status(500).json({error: 'Problem to create a new squad'})
         }
    }
})

router.get('/:id', async (req,res) => {
    const { id } = req.params

    try {
        res.status(200).json(await Squad.findById(id).populate('employees'))
    } catch (error) {
        res.status(500).json({error: 'Problem getting squad information'})
    }
})

router.post('/add', async (req,res) => {
    let { squadID, employeeToAdd } = req.body
    
    try {
        let squad = await Squad.findById(squadID)
        squad.employees.push(employeeToAdd)
        await squad.save()
        res.json(await Squad.findById(squadID).populate('employees'))
    } catch (error) {
        console.error(error)
        res.status(401).json({error: error})
    }
})

router.get('/', async (req,res) => {
    try {
        res.json(await Squad.find().populate('employees'))
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router