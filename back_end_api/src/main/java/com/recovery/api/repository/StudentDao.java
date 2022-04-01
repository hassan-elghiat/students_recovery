package com.recovery.api.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.recovery.api.model.Student;


@RepositoryRestResource
public interface StudentDao extends JpaRepository<Student, Long>, Serializable{
}
