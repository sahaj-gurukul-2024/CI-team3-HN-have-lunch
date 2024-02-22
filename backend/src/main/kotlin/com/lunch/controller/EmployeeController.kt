package com.lunch.controller

import com.lunch.entity.EmployeeEntity
import com.lunch.service.EmployeeService
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Body
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Post

@Controller
class EmployeeController(private val employeeService: EmployeeService) {
    @Post(uri = "/login", consumes = [MediaType.APPLICATION_JSON], produces = [MediaType.APPLICATION_JSON])
    fun employeeLogin(@Body employee: EmployeeEntity): HttpResponse<EmployeeEntity> {
        return HttpResponse.ok(employeeService.getOrUpdateOrCreateEmployee(employee))
    }
}