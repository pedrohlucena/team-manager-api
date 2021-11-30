module.exports = ({ EmployeeRepository }) => {
    return async ({ name, email, position }) => {
        try {
            const employee = await EmployeeRepository.create({ name, email, position }) 
            return { 
                status: 200, 
                data: employee 
            }
        } catch (error) {
            console.error(error) 

            return { 
                status: 500, 
                data: { error: "Problem to create a new employee" } 
            }
        }
    }
}