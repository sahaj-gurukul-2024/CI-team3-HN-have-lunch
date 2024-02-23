package com.lunch.entity

import io.micronaut.data.annotation.MappedEntity
import io.micronaut.serde.annotation.Serdeable
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@MappedEntity
@Table(name = "employees")
@Serdeable
data class EmployeeEntity(
    @Id
    @Column(name = "id")
    val id: Int,

    @Column(name = "name")
    val name: String
)