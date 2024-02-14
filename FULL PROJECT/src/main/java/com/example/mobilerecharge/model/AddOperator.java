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

public class AddOperator {

    @Id
@GeneratedValue(strategy = GenerationType.AUTO)
    private int aopId;
    private String name;
    private String description;
    private String imageUrl;
    public AddOperator(int aopId, String name, String description, String imageUrl) {
        this.aopId = aopId;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
