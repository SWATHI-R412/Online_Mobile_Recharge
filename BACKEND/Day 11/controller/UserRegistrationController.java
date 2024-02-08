package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.mobilerecharge.model.User_Registration;
import com.example.mobilerecharge.service.UserRegistrationService;

import java.util.List;
@RestController
@CrossOrigin(origins = "https://localhost:3000/")
public class UserRegistrationController {

    @Autowired
    private UserRegistrationService service;

    @PostMapping("/registration")
    public User_Registration postDetails(@RequestBody User_Registration registration) {
        return service.addDetails(registration);
    }

    @GetMapping("/registrations")
    public List<User_Registration> getAllRegistrations() {
        return service.getAllRegistrations();
    }

    @GetMapping("/registration/{id}")
    public User_Registration getRegistrationById(@PathVariable Integer id) {
        return service.getRegistrationById(id);
    }

    @PutMapping("/registration/{id}")
    public User_Registration updateRegistration(@PathVariable Integer id, @RequestBody User_Registration updatedRegistration) {
        return service.updateRegistration(id, updatedRegistration);
    }

    @DeleteMapping("/registration/{id}")
    public void deleteRegistration(@PathVariable Integer id) {
        service.deleteRegistration(id);
    }

    
}
