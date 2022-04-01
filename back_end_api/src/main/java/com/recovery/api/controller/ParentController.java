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

import com.recovery.api.model.Parent;
import com.recovery.api.service.ParentService;

@RestController
@RequestMapping("/parents")
public class ParentController {
	
	@Autowired
    private ParentService parentService;
	
	@PostMapping("/add")
    public Optional<Parent> addParent(@RequestBody final Parent parent){
        return parentService.addParent(parent);
    }
	
	@GetMapping("/all")
    public List<Parent> getAllParents(){
        return parentService.getAllParents();
    }
	
	@PutMapping("/update/{parentId}")
    public Optional<Parent> updateParent(@RequestBody final Parent parent,@PathVariable("parentId") final Long parentId) {
        return parentService.updateParent(parent, parentId);
    }
	
	@GetMapping("/parent/{parentId}")
    public Optional<Parent> getParentById(@PathVariable("parentId") final Long parentId){
        return parentService.getParentById(parentId);
    }

    @DeleteMapping("/delete/{parentId}")
    public void deleteParent(@PathVariable final Long parentId) {
    	parentService.deleteParent(parentId);
    }
	

}
