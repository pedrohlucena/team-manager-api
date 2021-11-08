const express = require('express')
import { EmployeeRepository } from '../repositories/index'

const router = express.Router()

router.post('/create', async (req,res) => {
    const { name, email, position }  = req.body

    try {
        const employee = await EmployeeRepository.create({name: name, email: email, position: position})
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
        const employeeInfo = await EmployeeRepository.find(id)
        res.status(200).json(employeeInfo)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Problem getting employee information'})
    }
})

router.get('/', async (req,res) => {
    try {
      const employees = await EmployeeRepository.getAll()
      res.json(employees)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

router.delete('/:id', async (req,res) => {
    const { id } = req.params

    try {
      await EmployeeRepository.remove(id)
      res.json('Employee deleted!')
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error})
    }
})

module.exports = router