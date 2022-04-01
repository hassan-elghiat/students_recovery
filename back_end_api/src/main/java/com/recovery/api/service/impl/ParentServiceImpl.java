package com.recovery.api.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.recovery.api.model.Parent;
import com.recovery.api.model.Student;
import com.recovery.api.repository.ParentDao;
import com.recovery.api.service.ParentService;
import com.recovery.api.service.StudentService;

@Service
@CrossOrigin
public class ParentServiceImpl implements ParentService{
	
	@Autowired
	private ParentDao parentDao;
	
	
	public ParentServiceImpl(ParentDao parentDao,StudentServiceImpl studentService) {
		
		this.parentDao = parentDao;
	}

	@Override
	public List<Parent> getAllParents() {
		List<Parent> parents = parentDao.findAll();
		/*
		parents.forEach(parent -> {
			List<Student> students = studentService.getAllStudentsByParentId(parent.getParentId()); 
			parent.setStudents(students);
		});*/
		return parents;
	}

	@Override
	public Optional<Parent> addParent(Parent parent) {
		try {
			return Optional.of(parentDao.save(parent));
		} catch (Exception e) {
			return Optional.empty();
		}
	}

	@Override
	public Optional<Parent> updateParent(Parent parent,Long parentId) {
		try {
			Optional<Parent> oldParent = Optional.of(parentDao.getOne(parentId));
			oldParent.get().setFirstName(parent.getFirstName());
			oldParent.get().setLastName(parent.getLastName());
			oldParent.get().setDateBirth(parent.getDateBirth());
			oldParent.get().setCin(parent.getCin());
			parentDao.save(oldParent.get());
	       
	        return oldParent;
		} catch (Exception e) {
			return Optional.empty();
		}
		
		
	}

	@Override
	public void deleteParent(Long parentId) {
		parentDao.deleteById(parentId);
	}

	@Override
	public Optional<Parent> getParentById(Long parentId) {
		try {
			return Optional.of(parentDao.findById(parentId).get());
		} catch (Exception e) {
			return Optional.empty();
		}
	}

}
