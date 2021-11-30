module.exports = ({ EmployeeRepository }) => {
    return async (id) => {
        try {
            await EmployeeRepository.remove(id)
            return { 
                status: 200, 
                data: 'Employee deleted!'
            }
        }
        catch (error) {
            console.error(error) 

            return { 
                status: 500, 
                data: { error: error }
            }
        }
    }
}