const express = require('express')
const { createSquad, getSquad, getAllSquads, addNewEmployee } = require('../use-cases')

const router = express.Router()

router.post('/create', async (req,res) => {
    const { squadName, employeesIDS } = req.body

    const { status, data } = await createSquad({name: squadName, employees: employeesIDS})
    res.status(status).json(data)
})

router.get('/:id', async (req,res) => {
    const { id } = req.params

    const { status, data } = await getSquad(id)
    res.status(status).json(data)
})

router.post('/add', async (req,res) => {
    const { squadID, employeeToAdd } = req.body

    const { status, data } = await addNewEmployee(squadID, employeeToAdd)
    res.status(status).json(data)
})

router.get('/', async (req,res) => {
    const { status, data } = await getAllSquads()
    res.status(status).json(data)
})

module.exports = router