package com.lunch.controller

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces

@Controller("/healthz")
class HealthzController {
    @Get
    @Produces(MediaType.TEXT_PLAIN)
    fun check() = HttpResponse.ok("ok")
}