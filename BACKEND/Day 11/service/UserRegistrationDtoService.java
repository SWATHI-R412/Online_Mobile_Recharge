package com.example.mobilerecharge.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.dto.User_Registration_Dto;
import com.example.mobilerecharge.model.User_Registration;
import com.example.mobilerecharge.repository.UserRegistrationRepository;

@Service
public class UserRegistrationDtoService {

    @Autowired
    private UserRegistrationRepository userRegRepo;

    private User_Registration_Dto convertEntityToDto(User_Registration userReg) {
        User_Registration_Dto userRegDto = new User_Registration_Dto();
        userRegDto.setFullName(userReg.getFullName());
        userRegDto.setEmail(userReg.getEmail());
        userRegDto.setMobileNumber(userReg.getMobileNumber());
        return userRegDto;
    }

  

    public List<User_Registration_Dto> getAllUsers() {
        return userRegRepo.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    public boolean updateUser(int userId, User_Registration updatedUser) {
        Optional<User_Registration> existingUser = userRegRepo.findById(userId);

        if (existingUser.isPresent()) {
            User_Registration userToUpdate = existingUser.get();
            userToUpdate.setFullName(updatedUser.getFullName());
            userToUpdate.setEmail(updatedUser.getEmail());
            userToUpdate.setMobileNumber(updatedUser.getMobileNumber());
            userRegRepo.save(userToUpdate);
            return true;
        } else {
            return false;
        }
    }

    public boolean deleteUser(int userId) {
        Optional<User_Registration> userToDelete = userRegRepo.findById(userId);

        if (userToDelete.isPresent()) {
            userRegRepo.delete(userToDelete.get());
            return true;
        } else {
            return false;
        }
    }
}
