package com.example.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.model.User_Feedback;
import com.example.mobilerecharge.service.UserFeedbackService;

@RestController
public class UserFeedbackController {

    @Autowired

    public UserFeedbackService service;
    @PostMapping("/feedback")
    public User_Feedback postDetails(@RequestBody User_Feedback feedback){
        return service.addDetails(feedback);
    }

}
