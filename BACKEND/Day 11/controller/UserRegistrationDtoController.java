// package com.example.mobilerecharge.controller;

// import org.springframework.web.bind.annotation.RestController;
// import com.example.mobilerecharge.dto.User_Registration_Dto;
// import com.example.mobilerecharge.model.User_Registration;
// import com.example.mobilerecharge.service.UserRegistrationDtoService;
// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.GetMapping;


// @RestController
// @RequestMapping("/regdto")

// public class UserRegistrationDtoController {

//     @Autowired
//     private UserRegistrationDtoService userDtoService;

//     @PostMapping("/post")
//     public boolean addUser(@RequestBody User_Registration userReg) {        
//         return userDtoService.addUser(userReg);
//     }
//     @GetMapping("/get")
//     public List<User_Registration_Dto> getAllUsers() {
//         return userDtoService.getAllUsers();
//     }    
// }
package com.example.mobilerecharge.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.dto.User_Registration_Dto;
import com.example.mobilerecharge.model.User_Registration;
import com.example.mobilerecharge.service.UserRegistrationDtoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/regdto")
public class UserRegistrationDtoController {

    @Autowired
    private UserRegistrationDtoService userDtoService;

   

    @GetMapping("/get")
    public List<User_Registration_Dto> getAllUsers() {
        return userDtoService.getAllUsers();
    }

    @PutMapping("/put/{userId}")
    public boolean updateUser(@PathVariable int userId, @RequestBody User_Registration userReg) {
        // Assuming you have a method like updateUser in your service
        return userDtoService.updateUser(userId, userReg);
    }

    @DeleteMapping("/delete/{userId}")
    public boolean deleteUser(@PathVariable int userId) {
        // Assuming you have a method like deleteUser in your service
        return userDtoService.deleteUser(userId);
    }
}
