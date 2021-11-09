const express = require('express')
const { SquadRepository } = require('../repositories/index')

const router = express.Router()

router.post('/create', async (req,res) => {
    const { squadName, employeesIDS } = req.body

    if (!squadName) {
        try {
            const squad = await SquadRepository.create({ employees: employeesIDS })
            res.status(200).json(squad)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: 'Problem to create a new squad'})
        }
    } else {
        try {
             const squad = await SquadRepository.create({name: squadName, employees: employeesIDS})
             res.status(200).json(squad)
         } catch (error) {
             console.error(error)
             res.status(500).json({error: 'Problem to create a new squad'})
         }
    }
})

router.get('/:id', async (req,res) => {
    const { id } = req.params

    try {
        res.status(200).json(await SquadRepository.find(id))
    } catch (error) {
        res.status(500).json({error: 'Problem getting squad information'})
    }
})

router.post('/add', async (req,res) => {
    const { squadID, employeeToAdd } = req.body
    
    try {
        const newSquad = await SquadRepository.addNewEmployee(squadID, employeeToAdd)
        res.json(newSquad)
    } catch (error) {
        console.error(error)
        res.status(401).json({error: error})
    }
})

router.get('/', async (req,res) => {
    try {
        res.json(await SquadRepository.getAll())
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router