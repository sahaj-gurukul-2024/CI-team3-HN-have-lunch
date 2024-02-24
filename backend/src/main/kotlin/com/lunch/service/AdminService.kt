package com.lunch.service

import com.lunch.dtos.EmployeeAttendanceCountEntry
import com.lunch.repository.EmployeeAttendanceRepository
import jakarta.inject.Singleton
import java.time.LocalDate

@Singleton
class AdminService(private val employeeAttendanceRepository: EmployeeAttendanceRepository) {
    fun getEmployeeCountOnDate(date: LocalDate): EmployeeAttendanceCountEntry {
        return EmployeeAttendanceCountEntry(
            date = date,
            count = employeeAttendanceRepository.getCountByDate(date)
        )
    }
}