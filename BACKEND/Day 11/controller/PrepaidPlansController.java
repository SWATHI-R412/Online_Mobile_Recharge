// // PrepaidPlansController.java

// package com.example.mobilerecharge.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.example.mobilerecharge.model.PrepaidPlans;
// import com.example.mobilerecharge.service.PrepaidPlansService;

// @RestController
// @CrossOrigin(origins = "http://localhre:3000/")
// @RequestMapping("/prepaid-plans")
// public class PrepaidPlansController {

//     @Autowired
//     private PrepaidPlansService prepaidPlansService;

//     @GetMapping("/all")
//     public List<PrepaidPlans> getAllPlans() {
//         return prepaidPlansService.getAllPlans();
//     }

//     @PreMapping("/{operator}")
//     public void addPlan(@PathVariable String operator, @RequestBody PrepaidPlans newPlan) {
//         prepaidPlansService.addPlan(operator, newPlan);
//     }

//     @PutMapping("/{operator}/{index}")
//     public void updatePlan(@PathVariable String operator, @PathVariable int index, @RequestBody PrepaidPlans updatedPlan) {
//         prepaidPlansService.updatePlan(operator, index, updatedPlan);
//     }

//     @DeleteMapping("/{operator}/{index}")
//     public void deletePlan(@PathVariable String operator, @PathVariable int index) {
//         prepaidPlansService.deletePlan(operator, index);
//     }
// }
package com.example.mobilerecharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mobilerecharge.model.PrepaidPlans;
import com.example.mobilerecharge.service.PrepaidPlansService;

@RestController
@CrossOrigin(origins = "http://localhre:3000/") 
@RequestMapping("/prepaid-plans")
public class PrepaidPlansController {

    @Autowired
    private PrepaidPlansService prepaidPlansService;

    @GetMapping("/all")
    public List<PrepaidPlans> getAllPlans() {
        return prepaidPlansService.getAllPlans();
    }

    @PostMapping("/{operator}")
    public void addPlan(@PathVariable String operator, @RequestBody PrepaidPlans newPlan) {
        prepaidPlansService.addPlan(operator, newPlan);
    }

    @PutMapping("/{operator}/{id}")
    public void updatePlan(@PathVariable String operator, @PathVariable int id, @RequestBody PrepaidPlans updatedPlan) {
        prepaidPlansService.updatePlan(operator, id, updatedPlan);
    }

    @DeleteMapping("/{operator}/{id}")
    public void deletePlan(@PathVariable String operator, @PathVariable int id) {
        prepaidPlansService.deletePlan(operator, id);
    }
}
