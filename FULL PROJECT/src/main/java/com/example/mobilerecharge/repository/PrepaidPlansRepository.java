// // PrepaidPlansRepository.java

// package com.example.mobilerecharge.repository;

// import java.util.List;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.example.mobilerecharge.model.PrepaidPlans;

// public interface PrepaidPlansRepository extends JpaRepository<PrepaidPlans, Integer> {

//     List<PrepaidPlans> findByOperator(String operator);

    
// }
package com.example.mobilerecharge.repository;

import com.example.mobilerecharge.model.PrepaidPlans;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PrepaidPlansRepository extends JpaRepository<PrepaidPlans, Integer> {
    // You can add custom query methods here if needed.
}