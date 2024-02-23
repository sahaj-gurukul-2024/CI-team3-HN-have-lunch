package com.lunch.service

import com.lunch.entity.EmployeeEntity
import com.lunch.repository.EmployeeRepository
import jakarta.inject.Singleton

@Singleton
class EmployeeService(private val employeeRepository: EmployeeRepository) {
    fun getOrUpdateOrCreateEmployee(employeeEntity: EmployeeEntity): EmployeeEntity {
        val employee = employeeRepository.getById(employeeEntity.id)
        if (employee == null) {
            employeeRepository.save(employeeEntity)
        } else if (employeeEntity.name != employee.name) {
            employeeRepository.update(employeeEntity)
        }
        return employeeEntity
    }

}