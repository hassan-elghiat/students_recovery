package com.recovery.api.service;

import java.util.List;
import java.util.Optional;

import com.recovery.api.model.Student;

public interface StudentService {
	List<Student> getAllStudents();
    Optional<Student> addStudent(Student student);
    Optional<Student> updateStudent(Student student,Long studentId);
    void deleteStudent(Long studentId);
    Optional<Student> getStudentById(Long studentId);
    List<Student> getAllStudentsByParentId(Long parentId);

}
