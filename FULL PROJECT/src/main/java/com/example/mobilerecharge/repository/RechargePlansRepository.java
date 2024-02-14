package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.Recharge_Plans;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RechargePlansRepository extends JpaRepository<Recharge_Plans, Integer> {
    
}
