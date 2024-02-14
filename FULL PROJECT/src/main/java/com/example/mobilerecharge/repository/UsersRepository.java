package com.example.mobilerecharge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mobilerecharge.model.Users;

public interface UsersRepository extends JpaRepository<Users, String> {
    Optional<Users> findByEmail(String email);

    Users findByName(String name);
}
