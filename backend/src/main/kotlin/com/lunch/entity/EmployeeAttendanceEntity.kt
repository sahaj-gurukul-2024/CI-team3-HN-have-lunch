package com.lunch.entity

import io.micronaut.data.annotation.MappedEntity
import io.micronaut.serde.annotation.Serdeable
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@MappedEntity
@Table(
    name = "attendance",
    uniqueConstraints = [UniqueConstraint(columnNames = ["employee_id", "date"])]
)
@Serdeable
data class EmployeeAttendanceEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    val id: Int? = null,

    @OneToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    val employee: EmployeeEntity,

    @Column(name = "status")
    val status: AttendanceStatus,

    @Column(name = "date", columnDefinition = "DATE")
    val date: LocalDate,
)

enum class AttendanceStatus {
    YES,
    NO,
    NOT_SPECIFIED
}