package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.model.Add_On;
import com.example.mobilerecharge.service.AddOnService;

@RestController
public class AddOnController {

    @Autowired

    public AddOnService service;
    @PostMapping("/addon")
    public Add_On postDetails(@RequestBody Add_On addon){
        return service.addDetails(addon);
    }

}
