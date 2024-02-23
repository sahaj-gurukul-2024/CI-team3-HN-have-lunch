package com.lunch.controller

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.entity.EmployeeEntity
import com.lunch.service.EmployeeAttendanceService
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.*
import java.text.SimpleDateFormat

@Controller
class EmployeeAttendanceController(private val employeeAttendanceService: EmployeeAttendanceService) {
    @Post(uri = "/attendance", consumes = [MediaType.APPLICATION_JSON], produces = [MediaType.APPLICATION_JSON])
    fun addOrUpdateAttendance(@Body attendance: EmployeeAttendanceEntity): HttpResponse<EmployeeAttendanceEntity> {
        return HttpResponse.ok(employeeAttendanceService.addEmployeeAttendance(attendance))
    }

    @Get(uri = "/attendance/{empId}", consumes = [MediaType.APPLICATION_JSON], produces = [MediaType.APPLICATION_JSON])
    fun getEmployeeHistory(@PathVariable("empId") empId: Int): HttpResponse<List<EmployeeAttendanceEntity>> {
        return HttpResponse.ok(employeeAttendanceService.getEmployeeHistory(empId))
    }
}
