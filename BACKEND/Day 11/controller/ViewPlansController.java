package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.View_Plans;
import com.example.mobilerecharge.service.ViewPlansService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("view-plans")
public class ViewPlansController {

    private final ViewPlansService viewPlansService;
    public ViewPlansController(ViewPlansService viewPlansService) {
        this.viewPlansService = viewPlansService;
    }

    @GetMapping("/{operator}")
    public View_Plans getPlansByOperator(@PathVariable String operator) {
        return viewPlansService.getPlansByOperator(operator);
    }
}
