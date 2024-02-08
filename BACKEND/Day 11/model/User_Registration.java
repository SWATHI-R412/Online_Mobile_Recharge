package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor

public class User_Registration {

    @Id
    private int regId;
    private String fullName;
    private String email;
    private String password;
    private String mobileNumber;
    public User_Registration(int regId, String fullName, String email, String password, String mobileNumber) {
        this.regId = regId;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
    }
}
