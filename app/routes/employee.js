const { createEmployee, getEmployee, getAllEmployees, deleteEmployee } = require('../use-cases')

const express = require('express')
const router = express.Router()


router.post('/create', async (req,res) => {
    const { name, email, position }  = req.body 

    const { status, data } = await createEmployee({ name, email, position })
    res.status(status).json(data)
})

router.get('/:id', async (req,res) => {
    const { id } = req.params

    const { status, data } = await getEmployee(id)
    res.status(status).json(data)
})

router.get('/', async (req,res) => {
    const { status, data } = await getAllEmployees()
    res.status(status).json(data)
})

router.delete('/:id', async (req,res) => {
    const { id } = req.params

    const { status, data } = await deleteEmployee(id)
    res.status(status).json(data)
})

module.exports = router