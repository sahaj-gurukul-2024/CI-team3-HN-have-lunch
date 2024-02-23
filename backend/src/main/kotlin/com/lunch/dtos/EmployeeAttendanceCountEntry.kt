package com.lunch.dtos

import io.micronaut.serde.annotation.Serdeable
import java.util.Date

@Serdeable
data class EmployeeAttendanceCountEntry(val date: Date, val count: Int)