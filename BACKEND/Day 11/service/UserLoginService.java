package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.User_Login;
import com.example.mobilerecharge.repository.UserLoginRepository;

@Service
public class UserLoginService {
    @Autowired

    public UserLoginRepository repo;
    public User_Login addDetails(User_Login login){
        return repo.save(login);
    }


}
