package com.recovery.api.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.recovery.api.model.Parent;

@RepositoryRestResource
public interface ParentDao extends JpaRepository<Parent, Long>, Serializable{
}
