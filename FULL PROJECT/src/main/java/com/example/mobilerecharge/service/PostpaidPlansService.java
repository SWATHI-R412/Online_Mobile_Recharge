package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.PostpaidPlans;
import com.example.mobilerecharge.repository.PostpaidPlansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostpaidPlansService {

    @Autowired
    private PostpaidPlansRepository postpaidPlansRepository;

    public List<PostpaidPlans> getAllPlans() {
        return postpaidPlansRepository.findAll();
    }

    public void addPlan(String operator, PostpaidPlans newPlan) {
        newPlan.setOperator(operator);
        postpaidPlansRepository.save(newPlan);
    }

    public void updatePlan(String operator, int id, PostpaidPlans updatedPlan) {
        PostpaidPlans existingPlan = postpaidPlansRepository.findById(id).orElse(null);
        if (existingPlan != null && existingPlan.getOperator().equals(operator)) {
            // Update fields individually or provide a method in PostpaidPlans to copy values
            existingPlan.setPlanName(updatedPlan.getPlanName());
            existingPlan.setPrice(updatedPlan.getPrice());
            existingPlan.setData(updatedPlan.getData());
            existingPlan.setValidity(updatedPlan.getValidity());
            // Set other fields accordingly

            postpaidPlansRepository.save(existingPlan);
        }
        // Handle the case where the plan with the given id and operator is not found.
    }

    public void deletePlan(String operator, int id) {
        PostpaidPlans existingPlan = postpaidPlansRepository.findById(id).orElse(null);
        if (existingPlan != null && existingPlan.getOperator().equals(operator)) {
            postpaidPlansRepository.deleteById(id);
        }
        // Handle the case where the plan with the given id and operator is not found.
    }
}
