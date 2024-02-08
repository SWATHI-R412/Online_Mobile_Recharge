package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.View_Plans;
import com.example.mobilerecharge.repository.ViewPlansRepository;
import org.springframework.stereotype.Service;

@Service
public class ViewPlansService {

    private final ViewPlansRepository viewPlansRepository;
    public ViewPlansService(ViewPlansRepository viewPlansRepository) {
        this.viewPlansRepository = viewPlansRepository;
    }

    public View_Plans getPlansByOperator(String operator) {
        return viewPlansRepository.findByOperator(operator);
    }
}
