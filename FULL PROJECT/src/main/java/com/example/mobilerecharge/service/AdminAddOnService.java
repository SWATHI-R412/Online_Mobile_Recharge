package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.AdminAddOn;
import com.example.mobilerecharge.repository.AdminAddOnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminAddOnService {

    @Autowired
    private AdminAddOnRepository adminAddOnRepository;

    public List<AdminAddOn> getAllAddOns() {
        return adminAddOnRepository.findAll();
    }

    public void addAddOn(AdminAddOn newAddOn) {
        adminAddOnRepository.save(newAddOn);
    }

    public void updateAddOn(int id, AdminAddOn updatedAddOn) {
        Optional<AdminAddOn> existingAddOnOptional = adminAddOnRepository.findById(id);
        if (existingAddOnOptional.isPresent()) {
            AdminAddOn existingAddOn = existingAddOnOptional.get();
            existingAddOn.setName(updatedAddOn.getName());
            existingAddOn.setDescription(updatedAddOn.getDescription());
            existingAddOn.setOperator(updatedAddOn.getOperator());
            adminAddOnRepository.save(existingAddOn);
        } else {
            throw new IllegalArgumentException("AdminAddOn with id " + id + " not found");
            // Alternatively, you can handle it based on your application's logic.
            // For example, return a custom response or log the error.
        }
    }

    public void deleteAddOn(int id) {
        Optional<AdminAddOn> adminAddOnOptional = adminAddOnRepository.findById(id);
        if (adminAddOnOptional.isPresent()) {
            adminAddOnRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("AdminAddOn with id " + id + " not found");
            // Alternatively, handle it based on your application's logic.
        }
    }
}
