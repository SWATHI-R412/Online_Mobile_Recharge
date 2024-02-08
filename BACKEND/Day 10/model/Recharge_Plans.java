package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Recharge_Plans {

    @Id
    
    private int rechargeId; 
    private String planName;
    private String selectedPlan;
    

    public Recharge_Plans(String planName, String selectedPlan) {
        this.planName = planName;
        this.selectedPlan = selectedPlan;
    }
}
