package com.example.mobilerecharge.service;

import com.example.mobilerecharge.dto.request.LoginRequest;
import com.example.mobilerecharge.dto.request.RegisterRequest;
import com.example.mobilerecharge.dto.response.LoginResponse;
import com.example.mobilerecharge.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
