package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Recharge_Plans {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int rechargeId; 
    private long mobileNumber;
    private String operator;
    private String selectedPlan;
    

    public Recharge_Plans(int rechargeId, long mobileNumber, String operator, String selectedPlan) {
        this.rechargeId = rechargeId;
        this.mobileNumber = mobileNumber;
        this.operator = operator;
        this.selectedPlan = selectedPlan;
    }
}
