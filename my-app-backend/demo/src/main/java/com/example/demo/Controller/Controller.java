// package com.example.demo.Controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.Repository.UserRepository;
// import com.example.demo.Service.UserService;
// import com.example.demo.model.User;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;



// @RestController
// public class UserController {
//     @Autowired
//     public UserService service;
//     //GetMapping

//     @GetMapping("/getuser")
//     public List<User> getUser() {
//         return service.getUser();
        
//     }

//     //POST

//     @PostMapping("/adduser")
//     public String addUser(@RequestBody User model) {
//         service.addUser(model);
//         return "user added";
//     }
    
    
// }
