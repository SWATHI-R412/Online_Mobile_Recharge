package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.PostpaidPlans;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostpaidPlansRepository extends JpaRepository<PostpaidPlans, Integer> {
    // You can add custom query methods here if needed.
}
