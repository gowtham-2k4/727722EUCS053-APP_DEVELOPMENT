package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.UserRepository;
import com.example.demo.model.User;

@Service
public class UserService {

    @Autowired
    public UserRepository repo;

    // public UserModel model;
    
    //GET
    public List<User> getUser(){
        return repo.findAll();
    }

    //POST
    public String addUser(User obj){
        repo.save(obj);
        return "added";
    }

    //DELETE
    public String deleteUser(Long userId) {
        if (repo.existsById(userId)) {
            repo.deleteById(userId);
            return "User deleted";
        } else {
            return "User not found";
        }
    }
}
