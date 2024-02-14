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
public class User_Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int feedId; 
    private String name;
    private String email;
    private String feedback;

    public User_Feedback(String name, String email, String feedback) {
        this.name = name;
        this.email = email;
        this.feedback = feedback;
    }
}
