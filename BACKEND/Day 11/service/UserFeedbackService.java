package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.User_Feedback;
import com.example.mobilerecharge.repository.UserFeedbackRepository;

@Service
public class UserFeedbackService {
    @Autowired

    public UserFeedbackRepository repo;
    public User_Feedback addDetails(User_Feedback feedback){
        return repo.save(feedback);
    }


}
