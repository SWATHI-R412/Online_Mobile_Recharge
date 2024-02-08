package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.Admin_Login;
import com.example.mobilerecharge.repository.AdminLoginRepository;

@Service
public class AdminLoginService {
    @Autowired

    public AdminLoginRepository repo;
    public Admin_Login addDetails(Admin_Login adlogin){
        return repo.save(adlogin);
    }
}
