package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.Recharge_Plans;
import com.example.mobilerecharge.repository.RechargePlansRepository;

@Service
public class RechargePlansService {
    @Autowired

    public RechargePlansRepository repo;
    public Recharge_Plans addDetails(Recharge_Plans recharge){
        return repo.save(recharge);
    }


}
