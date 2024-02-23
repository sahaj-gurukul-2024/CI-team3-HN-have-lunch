package com.lunch.repository

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.entity.EmployeeEntity
import io.micronaut.data.jdbc.annotation.JdbcRepository
import io.micronaut.data.model.query.builder.sql.Dialect
import io.micronaut.data.repository.CrudRepository

@JdbcRepository(dialect = Dialect.H2)
interface EmployeeAttendanceRepository: CrudRepository<EmployeeAttendanceEntity, Int> {
    fun getAllByEmployee(employee:EmployeeEntity): List<EmployeeAttendanceEntity>
}