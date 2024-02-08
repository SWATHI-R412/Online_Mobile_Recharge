package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.model.User_Login;
import com.example.mobilerecharge.service.UserLoginService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class UserLoginController {

    @Autowired

    public UserLoginService service;
    @PostMapping("/login")
    public User_Login postDetails(@RequestBody User_Login login){
        return service.addDetails(login);
    }

}
