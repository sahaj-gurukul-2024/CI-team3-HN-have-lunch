package com.lunch.controller

import com.lunch.dtos.EmployeeAttendanceCountEntry
import com.lunch.service.AdminService
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.QueryValue
import java.security.AuthProvider
import java.util.*

@Controller
class AdminController(private val adminService: AdminService) {
    @Get(uri = "/admin", consumes = [MediaType.APPLICATION_JSON], produces = [MediaType.APPLICATION_JSON])
    fun getEmployeeCount(@QueryValue(defaultValue = "") date: Date): HttpResponse<EmployeeAttendanceCountEntry> {
        return HttpResponse.ok(adminService.getEmployeeCountOnDate(date))
    }

}