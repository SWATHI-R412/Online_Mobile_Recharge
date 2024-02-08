package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity

public class AdminAddOn {

    @Id
    private int adminAddonId;
    private String name;
    private String description;
    private String operator;
    public AdminAddOn(int adminAddonId, String name, String description, String operator) {
        this.adminAddonId = adminAddonId;
        this.name = name;
        this.description = description;
        this.operator = operator;
    }
}
