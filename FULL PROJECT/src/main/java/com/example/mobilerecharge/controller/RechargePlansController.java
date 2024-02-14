package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.model.Recharge_Plans;
import com.example.mobilerecharge.service.RechargePlansService;

@RestController
public class RechargePlansController {

    @Autowired

    public RechargePlansService service;
    @PostMapping("/recharge")
    public Recharge_Plans postDetails(@RequestBody Recharge_Plans recharge){
        return service.addDetails(recharge);
    }

}
