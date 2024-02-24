package com.lunch.repository

import com.lunch.entity.EmployeeAttendanceEntity
import com.lunch.entity.EmployeeEntity
import io.micronaut.data.annotation.Query
import io.micronaut.data.jdbc.annotation.JdbcRepository
import io.micronaut.data.model.query.builder.sql.Dialect
import io.micronaut.data.repository.CrudRepository
import java.time.LocalDate
import java.util.Date

@JdbcRepository(dialect = Dialect.POSTGRES)
interface EmployeeAttendanceRepository: CrudRepository<EmployeeAttendanceEntity, Int> {
    fun getAllByEmployeeId(employeeId: Int): List<EmployeeAttendanceEntity>
    @Query("SELECT COUNT(Distinct(employee_id)) FROM attendance where date=:date and status=0")
    fun getCountByDate(date: LocalDate): Int
}