package com.lunch

import com.lunch.entity.AttendanceStatus
import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.entity.EmployeeEntity
import com.lunch.repository.EmployeeAttendanceRepository
import com.lunch.repository.EmployeeRepository
import com.lunch.service.EmployeeAttendanceService
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import java.util.Date

@MicronautTest
class EmployeeAttendanceControllerServiceTest(
    private val employeeAttendanceService: EmployeeAttendanceService,
    private val employeeAttendanceRepository: EmployeeAttendanceRepository,
    private val employeeRepository: EmployeeRepository
) {
    @Test
    fun `should create an attendance repository for employee`() {
        val employee = EmployeeEntity(1, "Abc")
        employeeRepository.save(employee)
        val attendance = EmployeeAttendanceEntity(null, employee, AttendanceStatus.YES, Date())

        val created = employeeAttendanceService.addEmployeeAttendance(attendance)

        assertEquals(attendance, created)

        employeeAttendanceRepository.delete(attendance)
        employeeRepository.delete(employee)
    }
}