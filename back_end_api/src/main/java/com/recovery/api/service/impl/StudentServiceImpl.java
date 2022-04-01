package com.recovery.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.recovery.api.model.Student;
import com.recovery.api.repository.ParentDao;
import com.recovery.api.repository.StudentDao;
import com.recovery.api.service.StudentService;

@Service
@CrossOrigin
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentDao studentDao;
	
	
	public StudentServiceImpl(StudentDao studentDao) {
		this.studentDao = studentDao;
	}
	
	@Override
	public List<Student> getAllStudents() {
		return studentDao.findAll();
	}

	@Override
	public Optional<Student> addStudent(Student student) {
		try {
			return Optional.of(studentDao.save(student));
		} catch (Exception e) {
			return Optional.empty();
		}
	}

	@Override
	public Optional<Student> updateStudent(Student student,Long studentId) {
		Optional<Student> oldStudent = Optional.of(studentDao.getOne(studentId));
		oldStudent.get().setFirstName(student.getFirstName());
		oldStudent.get().setLastName(student.getLastName());
		oldStudent.get().setDateBirth(student.getDateBirth());
		oldStudent.get().setDateEntry(student.getDateEntry());
		oldStudent.get().setMassarId(student.getMassarId());
		oldStudent.get().setParent(student.getParent());
		studentDao.save(oldStudent.get());
       
        return oldStudent;
	}

	@Override
	public void deleteStudent(Long studentId) {
		studentDao.deleteById(studentId);
	}

	@Override
	public Optional<Student> getStudentById(Long studentId) {
		try {
			return Optional.of(studentDao.findById(studentId).get());
		} catch (Exception e) {
			return Optional.empty();
		}
	}

	@Override
	public List<Student> getAllStudentsByParentId(Long parentId) {
		List<Student> students = studentDao.findAll();
		List<Student> studentsByParent = new ArrayList<Student>();
		students.forEach(student -> {
			if(student.getParent() != null) {
				if (student.getParent().getParentId() == parentId ){
					studentsByParent.add(student);
				}
			}
		});
		return studentsByParent;
	}

}
