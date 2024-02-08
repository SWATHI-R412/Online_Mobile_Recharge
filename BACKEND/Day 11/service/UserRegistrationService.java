package com.example.mobilerecharge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.model.User_Registration;
import com.example.mobilerecharge.repository.UserRegistrationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserRegistrationService {

    @Autowired
    private UserRegistrationRepository repo;

    public List<User_Registration> getAllRegistrations() {
        return repo.findAll();
    }

    public User_Registration getRegistrationById(Integer id) {
        Optional<User_Registration> optionalRegistration = repo.findById(id);
        return optionalRegistration.orElse(null);
    }

    public User_Registration addDetails(User_Registration registration) {
        return repo.save(registration);
    }

    public User_Registration updateRegistration(Integer id, User_Registration updatedRegistration) {
        Optional<User_Registration> optionalRegistration = repo.findById(id);
        if (optionalRegistration.isPresent()) {
            User_Registration existingRegistration = optionalRegistration.get();
            // Update the existing registration with the new details
            existingRegistration.setFullName(updatedRegistration.getFullName());
            existingRegistration.setEmail(updatedRegistration.getEmail());
            // ... update other fields as needed
            return repo.save(existingRegistration);
        }
        return null; // Handle case where registration with the given ID is not found
    }

    public void deleteRegistration(Integer id) {
        repo.deleteById(id);
    }
}
