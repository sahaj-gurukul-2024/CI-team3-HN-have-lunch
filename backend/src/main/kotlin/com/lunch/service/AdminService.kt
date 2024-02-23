package com.lunch.service

import com.lunch.dtos.EmployeeAttendanceCountEntry
import com.lunch.repository.EmployeeAttendanceRepository
import jakarta.inject.Singleton
import java.util.Date

@Singleton
class AdminService(private val employeeAttendanceRepository: EmployeeAttendanceRepository) {
    fun getEmployeeCountOnDate(date: Date): EmployeeAttendanceCountEntry {
        return EmployeeAttendanceCountEntry(
            date = date,
            count = employeeAttendanceRepository.getCountByDate(date)
        )
    }
}