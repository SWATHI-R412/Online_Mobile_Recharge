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

public class PostpaidPlans {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int postplanId;
    private String operator;
    private String planName;
    private String price;
    private String data;
    private String validity;
    public PostpaidPlans(int postplanId, String operator, String planName, String price, String data, String validity) {
        this.postplanId = postplanId;
        this.operator = operator;
        this.planName = planName;
        this.price = price;
        this.data = data;
        this.validity = validity;
    }
}
