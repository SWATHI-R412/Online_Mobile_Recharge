package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.model.AddOperator;
import com.example.mobilerecharge.service.AddOperatorService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class AddOperatorController {

    @Autowired

    public AddOperatorService service;
    @PostMapping("/addop")
    public AddOperator postDetails(@RequestBody AddOperator addop){
        return service.addDetails(addop);
    }

}
