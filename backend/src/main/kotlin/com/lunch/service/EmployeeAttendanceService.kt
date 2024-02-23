package com.lunch.service

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.repository.EmployeeAttendanceRepository
import jakarta.inject.Singleton

@Singleton
class EmployeeAttendanceService(private val employeeAttendanceRepository: EmployeeAttendanceRepository) {
    fun addEmployeeAttendance(attendanceEntity: EmployeeAttendanceEntity): EmployeeAttendanceEntity {
        employeeAttendanceRepository.save(attendanceEntity)
        return attendanceEntity
    }
}