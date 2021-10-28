var express = require('express')
var router = express.Router()
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

router.delete('/:id', async (req,res) => {
    let { id } = req.params

    try {
        await Employee.findByIdAndDelete(id)
        res.status(200).json({message: 'Employee deleted!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Problem to delete a employee'})
    }
})

router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params
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