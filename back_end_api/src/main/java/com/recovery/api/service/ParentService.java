package com.recovery.api.service;

import java.util.List;
import java.util.Optional;

import com.recovery.api.model.Parent;

public interface ParentService {
	List<Parent> getAllParents();
	Optional<Parent> addParent(Parent parent);
    Optional<Parent> updateParent(Parent parent,Long parentId);
    void deleteParent(Long parentId);
    Optional<Parent> getParentById(Long parentId);

}
