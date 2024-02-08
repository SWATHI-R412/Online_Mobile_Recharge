package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.Add_On;
import com.example.mobilerecharge.repository.AddOnRepository;

@Service
public class AddOnService {
    @Autowired

    public AddOnRepository repo;
    public Add_On addDetails(Add_On addon){
        return repo.save(addon);
    }
}
