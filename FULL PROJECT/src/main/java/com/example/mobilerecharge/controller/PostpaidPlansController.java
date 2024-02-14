package com.example.mobilerecharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mobilerecharge.model.PostpaidPlans;
import com.example.mobilerecharge.service.PostpaidPlansService;

@RestController

@RequestMapping("/postpaid-plans")
public class PostpaidPlansController {

    @Autowired
    private PostpaidPlansService postpaidPlansService;

    @GetMapping("/all")
    public List<PostpaidPlans> getAllPlans() {
        return postpaidPlansService.getAllPlans();
    }

    @PostMapping("/{operator}")
    public void addPlan(@PathVariable String operator, @RequestBody PostpaidPlans newPlan) {
        postpaidPlansService.addPlan(operator, newPlan);
    }

    @PutMapping("/{operator}/{id}")
    public void updatePlan(@PathVariable String operator, @PathVariable int id, @RequestBody PostpaidPlans updatedPlan) {
        postpaidPlansService.updatePlan(operator, id, updatedPlan);
    }

    @DeleteMapping("/{operator}/{id}")
    public void deletePlan(@PathVariable String operator, @PathVariable int id) {
        postpaidPlansService.deletePlan(operator, id);
    }
}
