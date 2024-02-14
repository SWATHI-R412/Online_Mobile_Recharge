package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mobilerecharge.model.AdminAddOn;
import com.example.mobilerecharge.service.AdminAddOnService;

import java.util.List;

@RestController
@RequestMapping("/admin-addons")
public class AdminAddOnController {

    @Autowired
    private AdminAddOnService adminAddOnService;

    @GetMapping("/all")
    public List<AdminAddOn> getAllAddOns() {
        return adminAddOnService.getAllAddOns();
    }

    @PostMapping
    public void addAddOn(@RequestBody AdminAddOn newAddOn) {
        adminAddOnService.addAddOn(newAddOn);
    }

    @PutMapping("/{id}")
    public void updateAddOn(@PathVariable int id, @RequestBody AdminAddOn updatedAddOn) {
        adminAddOnService.updateAddOn(id, updatedAddOn);
    }

    @DeleteMapping("/{id}")
    public void deleteAddOn(@PathVariable int id) {
        adminAddOnService.deleteAddOn(id);
    }
}
