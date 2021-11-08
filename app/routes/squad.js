const express = require('express')
import { SquadRepository } from '../repositories/index'

const router = express.Router()

router.post('/create', async (req,res) => {
    const { squadName, employeesIDS } = req.body

    if (!squadName) {
        try {
            const squad = await SquadRepository.create({employees: employeesIDS})
            await squad.save()
            res.status(200).json(await SquadRepository.find(squad_id).populate('employees'))
        } catch (error) {
            console.error(error)
            res.status(500).json({error: 'Problem to create a new squad'})
        }
    } else {
        try {
             const squad = await SquadRepository.create({name: squadName, employees: employeesIDS})
             await squad.save()
             res.status(200).json(await SquadRepository.find(squad_id).populate('employees'))
         } catch (error) {
             console.error(error)
             res.status(500).json({error: 'Problem to create a new squad'})
         }
    }
})

router.get('/:id', async (req,res) => {
    const { id } = req.params

    try {
        res.status(200).json(await SquadRepository.find(id).populate('employees'))
    } catch (error) {
        res.status(500).json({error: 'Problem getting squad information'})
    }
})

router.post('/add', async (req,res) => {
    const { squadID, employeeToAdd } = req.body
    
    try {
        let squad = await SquadRepository.find(squadID)
        squad.employees.push(employeeToAdd)
        await squad.save()
        res.json(await SquadRepository.find(squadID).populate('employees'))
    } catch (error) {
        console.error(error)
        res.status(401).json({error: error})
    }
})

router.get('/', async (req,res) => {
    try {
        res.json(await SquadRepository.find().populate('employees'))
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router