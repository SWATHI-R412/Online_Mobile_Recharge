package com.example.mobilerecharge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity

public class Admin_Login {

    @Id
    private int adminId;
    private String userName;
    private String password;
    public Admin_Login(int adminId, String userName, String password) {
        this.adminId = adminId;
        this.userName = userName;
        this.password = password;
    }
}
