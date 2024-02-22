package com.lunch

import com.lunch.entity.EmployeeEntity
import com.lunch.repository.EmployeeRepository
import com.lunch.service.EmployeeService
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

@MicronautTest
class EmployeeServiceTest(
    private val employeeService: EmployeeService,
    private val employeeRepository: EmployeeRepository
) {
    @Test
    fun `should create a non existing employee`() {
        val employee = EmployeeEntity(1, "test_employee")
        employeeRepository.delete(employee)

        val createdEmployee = employeeService.getOrUpdateOrCreateEmployee(employee)

        assertEquals(employee, createdEmployee)
        employeeRepository.delete(employee)
    }

    @Test
    fun `should update an existing employee with same id`() {
        val employeeOld = EmployeeEntity(1, "test_employee")
        employeeRepository.save(employeeOld)
        val employeeNew = EmployeeEntity(1, "test_employee_changed")

        val createdEmployee = employeeService.getOrUpdateOrCreateEmployee(employeeNew)

        assertEquals(employeeNew.name, createdEmployee.name)
        employeeRepository.delete(createdEmployee)
    }

    @Test
    fun `should return an existing employee with same id`() {
        val employee = EmployeeEntity(1, "test_employee")
        employeeRepository.save(employee)

        val createdEmployee = employeeService.getOrUpdateOrCreateEmployee(employee)

        assertEquals(employee, createdEmployee)
        employeeRepository.delete(employee)
    }
}