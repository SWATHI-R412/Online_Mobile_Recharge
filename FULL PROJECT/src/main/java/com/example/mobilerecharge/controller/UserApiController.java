package com.example.mobilerecharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.dto.UserDto;
import com.example.mobilerecharge.service.UserApiService;

@RestController
public class UserApiController {

	@Autowired
	UserApiService service;
	
	@GetMapping("/get")
	public List<UserDto> read(){
		return service.getAllUsers();
	}
	
	@GetMapping("/get/{name}")
    public List<UserDto> getUserByUserName(@PathVariable String name) {
        return service.getUserByUserName(name);
    }
    
    @PutMapping("/put/{name}")
    public boolean updateUser(@PathVariable String name, @RequestBody UserDto userReg) {
        if (service.updateUser(name, userReg)) {

            return true;
        } 
        else {
            return false;
        }
    }
    
}