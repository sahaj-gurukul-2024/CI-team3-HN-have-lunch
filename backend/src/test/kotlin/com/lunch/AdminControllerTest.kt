package com.lunch

import io.micronaut.http.HttpRequest
import io.micronaut.http.HttpStatus
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import java.text.SimpleDateFormat
import java.util.Date

@MicronautTest
class AdminControllerTest(@Client("/") val client: HttpClient) {

    @Test
    fun `admin should be get count of employee for a date`() {
        val employee = mapOf("id" to 1, "name" to "abc")
        val reqLoginEmployee: HttpRequest<Any> = HttpRequest.POST("/login", employee)
        val date = "2023-01-20"
        val employeeAttendance = mapOf("employee" to employee, "date" to date, "status" to "YES")
        val reqSetPreference: HttpRequest<Any> = HttpRequest.POST("/attendance", employeeAttendance)
        client.toBlocking().retrieve(reqLoginEmployee)
        client.toBlocking().retrieve(reqSetPreference)

        val request: HttpRequest<Any> = HttpRequest.GET("/admin/${date}")

        val response = client.toBlocking().exchange(request, Map::class.java)

        Assertions.assertEquals(HttpStatus.OK, response.status())
        Assertions.assertEquals(1, response.body()["count"])
    }

    @Test
    fun `admin should be 0 count of employee if no one is coming`() {
        val date = "2023-01-20"
        val request: HttpRequest<Any> = HttpRequest.GET("/admin/${date}")

        val response = client.toBlocking().exchange(request, Map::class.java)

        Assertions.assertEquals(HttpStatus.OK, response.status())
        Assertions.assertEquals(0, response.body()["count"])
    }

}