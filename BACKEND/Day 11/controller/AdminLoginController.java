package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobilerecharge.model.Admin_Login;
import com.example.mobilerecharge.service.AdminLoginService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class AdminLoginController {

    @Autowired

    public AdminLoginService service;
    @PostMapping("/adlogin")
    public Admin_Login postDetails(@RequestBody Admin_Login adlogin){
        return service.addDetails(adlogin);
    }

}
