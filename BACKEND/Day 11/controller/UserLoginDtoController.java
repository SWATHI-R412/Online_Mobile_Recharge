package com.example.mobilerecharge.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.service.UserLoginDtoService;
import com.example.mobilerecharge.model.User_Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/regdto")
public class UserLoginDtoController {

    @Autowired
    private UserLoginDtoService userDtoService;

    @PostMapping("/post")
    public boolean addUser(@RequestBody User_Login userlog) {        
        return userDtoService.addUser(userlog);
    }
    
}
