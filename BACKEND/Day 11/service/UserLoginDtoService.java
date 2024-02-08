package com.example.mobilerecharge.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mobilerecharge.model.User_Login;
import com.example.mobilerecharge.repository.UserLoginRepository;

@Service
public class UserLoginDtoService {

    @Autowired
    private UserLoginRepository userRegRepo;

    public boolean addUser(User_Login userlog) {
        userRegRepo.save(userlog);
        return true;
    }

    
}
