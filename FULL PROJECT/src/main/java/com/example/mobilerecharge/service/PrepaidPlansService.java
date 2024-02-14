// // PrepaidPlansService.java

// package com.example.mobilerecharge.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// import com.example.mobilerecharge.model.PrepaidPlans;
// import com.example.mobilerecharge.repository.PrepaidPlansRepository;

// @Service
// public class PrepaidPlansService {

//     @Autowired
//     private PrepaidPlansRepository prepaidPlansRepository;

//     public List<PrepaidPlans> getAllPlans() {
//         return prepaidPlansRepository.findAll();
//     }

//     public void addPlan(String operator, PrepaidPlans newPlan) {
//         newPlan.setOperator(operator);
//         prepaidPlansRepository.save(newPlan);
//     }

//     public void updatePlan(String operator, int index, PrepaidPlans updatedPlan) {
//         List<PrepaidPlans> plans = prepaidPlansRepository.findByOperator(operator);
//         if (index >= 0 && index < plans.size()) {
//             PrepaidPlans planToUpdate = plans.get(index);
//             planToUpdate.setPlanName(updatedPlan.getPlanName());
//             planToUpdate.setPrice(updatedPlan.getPrice());
//             planToUpdate.setData(updatedPlan.getData());
//             planToUpdate.setValidity(updatedPlan.getValidity());
//             prepaidPlansRepository.save(planToUpdate);
//         } else {
//             throw new IllegalArgumentException("Invalid index");
//         }
//     }

//     public void deletePlan(String operator, int index) {
//         List<PrepaidPlans> plans = prepaidPlansRepository.findByOperator(operator);
//         if (index >= 0 && index < plans.size()) {
//             prepaidPlansRepository.delete(plans.get(index));
//         } else {
//             throw new IllegalArgumentException("Invalid index");
//         }
//     }
// }
package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.PrepaidPlans;
import com.example.mobilerecharge.repository.PrepaidPlansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrepaidPlansService {

    @Autowired
    private PrepaidPlansRepository prepaidPlansRepository;

    public List<PrepaidPlans> getAllPlans() {
        return prepaidPlansRepository.findAll();
    }

    public void addPlan(String operator, PrepaidPlans newPlan) {
        newPlan.setOperator(operator);
        prepaidPlansRepository.save(newPlan);
    }

    public void updatePlan(String operator, int id, PrepaidPlans updatedPlan) {
        PrepaidPlans existingPlan = prepaidPlansRepository.findById(id).orElse(null);
        if (existingPlan != null && existingPlan.getOperator().equals(operator)) {
            // Update fields individually or provide a method in PrepaidPlans to copy values
            existingPlan.setPlanName(updatedPlan.getPlanName());
            existingPlan.setPrice(updatedPlan.getPrice());
            existingPlan.setData(updatedPlan.getData());
            existingPlan.setValidity(updatedPlan.getValidity());
            // Set other fields accordingly

            prepaidPlansRepository.save(existingPlan);
        }
        // Handle the case where the plan with the given id and operator is not found.
    }

    public void deletePlan(String operator, int id) {
        PrepaidPlans existingPlan = prepaidPlansRepository.findById(id).orElse(null);
        if (existingPlan != null && existingPlan.getOperator().equals(operator)) {
            prepaidPlansRepository.deleteById(id);
        }
        // Handle the case where the plan with the given id and operator is not found.
    }
}
