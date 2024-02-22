package com.lunch.service

import com.lunch.entity.EmployeeEntity
import com.lunch.repository.EmployeeRepository
import jakarta.inject.Singleton

@Singleton
class EmployeeService(private val employeeRepository: EmployeeRepository) {
    fun getOrUpdateOrCreateEmployee(employeeEntity: EmployeeEntity): EmployeeEntity {
        val employees = employeeRepository.getAllById(employeeEntity.id)
        if (employees.isEmpty()) {
            employeeRepository.save(employeeEntity)
        } else if (employeeEntity.name != employees.first().name) {
            employeeRepository.update(employeeEntity)
        }
        return employeeEntity
    }

}