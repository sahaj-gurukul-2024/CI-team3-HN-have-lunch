package com.lunch.controller

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.service.EmployeeAttendanceService
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Body
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Post

@Controller
class EmployeeAttendanceController(private val employeeAttendanceService: EmployeeAttendanceService) {
    @Post(uri = "/login", consumes = [MediaType.APPLICATION_JSON], produces = [MediaType.APPLICATION_JSON])
    fun addOrUpdateAttendance(@Body attendance: EmployeeAttendanceEntity): HttpResponse<EmployeeAttendanceEntity> {
        return HttpResponse.ok(employeeAttendanceService.addEmployeeAttendance(attendance))
    }
}
