package com.example.mobilerecharge.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class View_Plans {
    @Id
    private int id;

    private String operator;
    private List<String> airtelPlans;
    private List<String> vodafonePlans;
    private List<String> jioPlans;
    private String selectedPlan;

    public View_Plans(int id, String operator, List<String> airtelPlans, List<String> vodafonePlans,
                      List<String> jioPlans, String selectedPlan) {
        this.id = id;
        this.operator = operator;
        this.airtelPlans = airtelPlans;
        this.vodafonePlans = vodafonePlans;
        this.jioPlans = jioPlans;
        this.selectedPlan = selectedPlan;
    }
}
