package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.View_Plans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewPlansRepository extends JpaRepository<View_Plans, Integer> {

    View_Plans findByOperator(String operator);
}
