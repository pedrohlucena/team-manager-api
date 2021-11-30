module.exports = ({ EmployeeRepository }) => {
    return async (id) => {
        try {
            const employeeInfo = await EmployeeRepository.find(id)
            return { 
                status: 200, 
                data: employeeInfo 
            }
        } catch (error) {
            console.error(error)

            return { 
                status: 500, 
                data: { error: 'Problem getting employee information' }
            }
        }
    }
}