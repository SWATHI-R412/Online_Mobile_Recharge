package com.example.mobilerecharge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mobilerecharge.dto.User_Login_Dto;
import com.example.mobilerecharge.model.User_Login;

public interface UserLoginRepository extends JpaRepository<User_Login, Integer>{

    void save(User_Login_Dto userReg);

}
