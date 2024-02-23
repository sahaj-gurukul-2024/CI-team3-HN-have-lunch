package com.lunch.controller

import com.lunch.entity.EmployeeEntity
import com.lunch.service.EmployeeService
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Body
import io.micronaut.http.annotation.Consumes
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Post
import io.micronaut.http.annotation.Produces

@Controller
class EmployeeController(private val employeeService: EmployeeService) {
    @Post("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun employeeLogin(@Body employee: EmployeeEntity): HttpResponse<EmployeeEntity> {
        return HttpResponse.ok(employeeService.getOrUpdateOrCreateEmployee(employee))
    }
}