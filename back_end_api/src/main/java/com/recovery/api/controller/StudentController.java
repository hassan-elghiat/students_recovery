package com.recovery.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recovery.api.model.Student;
import com.recovery.api.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
    private StudentService studentService;
	
	@PostMapping("/add")
    public Optional<Student> addCommission(@RequestBody final Student student){
        return studentService.addStudent(student);
    }
	
	@GetMapping("/all")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
	
	@PutMapping("/update/{studentId}")
    public Optional<Student> updateStudent(@RequestBody final Student student,@PathVariable("studentId") Long studentId) {
        return studentService.updateStudent(student, studentId);
    }
	
	@GetMapping("/student/{studentId}")
    public Optional<Student> getStudentById(@PathVariable("studentId") final Long studentId){
        return studentService.getStudentById(studentId);
    }

    @DeleteMapping("/delete/{studentId}")
    public void deleteStudent(@PathVariable final Long studentId) {
    	studentService.deleteStudent(studentId);
    }
	
	
	 

}
