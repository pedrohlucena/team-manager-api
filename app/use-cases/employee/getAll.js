module.exports = ({ EmployeeRepository }) => {
    return async () => {
        try {
            const employees = await EmployeeRepository.getAll()
            return { 
                status: 200, 
                data: employees 
            }
        } catch (error) {
            console.error(error)

            return { 
                status: 500, 
                data: { error: error}
            }
        }
    }
}