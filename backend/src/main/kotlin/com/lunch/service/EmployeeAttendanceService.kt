package com.lunch.service

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.repository.EmployeeAttendanceRepository
import com.lunch.repository.EmployeeRepository
import jakarta.inject.Singleton

@Singleton
class EmployeeAttendanceService(private val employeeAttendanceRepository: EmployeeAttendanceRepository, private val employeeRepository: EmployeeRepository) {
    fun addEmployeeAttendance(attendanceEntity: EmployeeAttendanceEntity): EmployeeAttendanceEntity {
        employeeAttendanceRepository.save(attendanceEntity)
        return attendanceEntity
    }

    fun getEmployeeHistory(empId: Int): List<EmployeeAttendanceEntity> {

        val employee = employeeRepository.getById(empId) ?: return listOf()

        return employeeAttendanceRepository.getAllByEmployeeId(employeeId = employee.id)
    }
}