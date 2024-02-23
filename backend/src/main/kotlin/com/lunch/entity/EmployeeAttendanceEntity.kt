package com.lunch.entity

import io.micronaut.data.annotation.MappedEntity
import io.micronaut.serde.annotation.Serdeable
import jakarta.persistence.*
import java.util.Date

@Entity
@MappedEntity
@Table(
    name = "attendance",
    uniqueConstraints = [UniqueConstraint(columnNames = arrayOf("employee_id", "date"))]
)

@Serdeable
data class EmployeeAttendanceEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    val id: Int? = null,

    @ManyToOne
    @JoinColumns(JoinColumn(name = "employee_id", referencedColumnName = "id"))
    val employee: EmployeeEntity,

    @Column(name = "status")
    val status: AttendanceStatus,

    @Column(name = "date", columnDefinition = "DATE")
    val date: Date,
)

enum class AttendanceStatus {
    YES,
    NO,
    NOT_SPECIFIED
}