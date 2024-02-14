package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class PrepaidPlans {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int preplanId;
    private String operator;
    private String planName;
    private String price;
    private String data;
    private String validity;
    public PrepaidPlans(int preplanId, String operator, String planName, String price, String data, String validity) {
        this.preplanId = preplanId;
        this.operator = operator;
        this.planName = planName;
        this.price = price;
        this.data = data;
        this.validity = validity;
    }
}
