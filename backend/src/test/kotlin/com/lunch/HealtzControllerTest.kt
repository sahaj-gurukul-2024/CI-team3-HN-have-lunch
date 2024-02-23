package com.lunch

import io.micronaut.http.HttpRequest
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Test

@MicronautTest
class HealtzControllerTest(@Client("/") val client: HttpClient) {
    @Test
    fun `healthz endpoint should be working`() {
        val request: HttpRequest<Any> = HttpRequest.GET("/healthz")
        val body = client.toBlocking().retrieve(request)
        assertNotNull(body)
        assertEquals("ok", body)
    }
}