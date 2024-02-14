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

public class Add_On {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int addOnId;
    private long mobileNumber;
    private String selectedAddOn;
    public Add_On(int addOnId, long mobileNumber, String selectedAddOn) {
        this.addOnId = addOnId;
        this.mobileNumber = mobileNumber;
        this.selectedAddOn = selectedAddOn;
    }
}
