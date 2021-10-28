var express = require('express')
var router = express.Router()
const Squad = require('../model/squad')
const Employee = require('../model/employee')

router.post('/create', async (req,res) => {
    let { name, employeesIDS } = req.body

    if (!name) {
        try {
           employeesIDS.forEach(async (currentEmployeeID) => {
               employees.push(await Employee.findById(currentEmployeeID))
           }); 
           
            let squad = new Squad({employees: employees})
            await squad.save()
            res.status(200).json(squad)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: 'Problem to create a new squad'})
        }
    } else {
        try {
            employeesIDS.forEach(async (currentEmployeeID) => {
                employees.push(await Employee.findById(currentEmployeeID))
            }); 
            
             let squad = new Squad({name: name, employees: employees})
             await squad.save()
             res.status(200).json(squad)
         } catch (error) {
             console.error(error)
             res.status(500).json({error: 'Problem to create a new squad'})
         }
    }
})

router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params
        let squadInfo = await Squad.findById(id)
        res.status(200).json(squadInfo)
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
        res.json(squad)
    } catch (error) {
        console.error(error)
        res.status(401).json({error: error})
    }
})

router.get('/', async (req,res) => {
    try {
      let squads = await Squad.find()
      res.json(squads)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router