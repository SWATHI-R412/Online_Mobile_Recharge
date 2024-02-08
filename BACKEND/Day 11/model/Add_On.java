package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity

public class Add_On {

    @Id
    private int addOnId;
    private String phoneNumber;
    private String selectedAddOn;
    public Add_On(int addOnId, String phoneNumber, String selectedAddOn) {
        this.addOnId = addOnId;
        this.phoneNumber = phoneNumber;
        this.selectedAddOn = selectedAddOn;
    }
}
