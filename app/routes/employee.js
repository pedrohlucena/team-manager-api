const express = require('express')
const Employee = require('../model/employee')

const router = express.Router()

router.post('/create', async (req,res) => {
    const { name, email, position }  = req.body

    try {
        const employee = new Employee({name: name, email: email, position: position})
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
        const employeeInfo = await Employee.findById(id)
        res.status(200).json(employeeInfo)
    } catch (error) {
        res.status(500).json({error: 'Problem getting employee information'})
    }
})

router.get('/', async (req,res) => {
    try {
      const employees = await Employee.find()
      res.json(employees)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router