package com.lunch

import io.micronaut.http.HttpRequest
import io.micronaut.http.HttpStatus
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test

@MicronautTest
class EmployeeAttendanceControllerTest(@Client("/attendance") val client: HttpClient) {

    @Test
    fun `employee should be able to mark their attendance`() {
        val employeeAttendance = mapOf("employee" to mapOf("id" to 1, "name" to "abc"), "date" to "2023-01-20T12:17:00Z", "status" to "YES")
        val request: HttpRequest<Any> = HttpRequest.POST("/", employeeAttendance)

        val response = client.toBlocking().exchange(request, Map::class.java)

        Assertions.assertEquals(HttpStatus.OK, response.status())
        Assertions.assertEquals(employeeAttendance, response.body())
    }

}