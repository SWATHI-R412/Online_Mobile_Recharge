package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.AddOperator;
import com.example.mobilerecharge.repository.AddOperatorRepository;

@Service
public class AddOperatorService {
    @Autowired

    public AddOperatorRepository repo;
    public AddOperator addDetails(AddOperator addop){
        return repo.save(addop);
    }
}
