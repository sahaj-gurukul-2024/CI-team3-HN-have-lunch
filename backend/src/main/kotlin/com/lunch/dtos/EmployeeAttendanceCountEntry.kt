package com.lunch.dtos

import io.micronaut.serde.annotation.Serdeable
import java.time.LocalDate

@Serdeable
data class EmployeeAttendanceCountEntry(val date: LocalDate, val count: Int)