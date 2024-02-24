package com.lunch.controller

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.service.EmployeeAttendanceService
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.*

@Controller
class EmployeeAttendanceController(private val employeeAttendanceService: EmployeeAttendanceService) {
    @Post("/attendance")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun addOrUpdateAttendance(@Body attendance: EmployeeAttendanceEntity): HttpResponse<EmployeeAttendanceEntity> {
        return HttpResponse.ok(employeeAttendanceService.addEmployeeAttendance(attendance))
    }

//    @Get("/attendance/{empId}")
//    @Consumes(MediaType.APPLICATION_JSON)
//    @Produces(MediaType.APPLICATION_JSON)
//    fun getEmployeeHistory(@PathVariable("empId") empId: Int): HttpResponse<List<EmployeeAttendanceEntity>> {
//        return HttpResponse.ok(employeeAttendanceService.getEmployeeHistory(empId))
//    }
}
