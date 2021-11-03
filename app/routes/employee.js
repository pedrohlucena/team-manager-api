const express = require('express')
const router = express.Router()
const Employee = require('../model/employee')

router.post('/create', async (req,res) => {
    let { name, email, position }  = req.body

    try {
        let employee = new Employee({name: name, email: email, position: position})
        await employee.save()
        res.status(200).json(employee)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Problem to create a new employee'})
    }
})

router.get('/:id', async (req,res) => {
    const { id } = req.params

    try {
        let employeeInfo = await Employee.findById(id)
        res.status(200).json(employeeInfo)
    } catch (error) {
        res.status(500).json({error: 'Problem getting employee information'})
    }
})

router.get('/', async (req,res) => {
    try {
      let employees = await Employee.find()
      res.json(employees)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router