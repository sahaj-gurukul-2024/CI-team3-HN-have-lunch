package com.lunch.controller

import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces

@Controller("/health-check")
class HealthCheckController {
    @Get("/")
    @Produces("text/plain")
    fun check() = HttpResponse.ok("Hello World!")
}