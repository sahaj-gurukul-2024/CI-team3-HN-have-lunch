package com.lunch

import io.micronaut.http.HttpRequest
import io.micronaut.http.HttpStatus
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

@MicronautTest
class EmployeeControllerTest(@Client("/login") val client: HttpClient) {

    @Test
    fun `employee should be able to login with id and name`() {
        val employee = mapOf("id" to 1, "name" to "abc")
        val request: HttpRequest<Any> = HttpRequest.POST("/", employee)

        val response = client.toBlocking().exchange(request, Map::class.java)

        assertEquals(HttpStatus.OK, response.status())
        assertEquals(employee, response.body())
    }
}