package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.BookingsRepository;
import com.example.demo.Repository.UserRepository;
import com.example.demo.model.BookingsModel;

@Service
public class BookingService {
     @Autowired
    public BookingsRepository repo;

    // public Booking model;
    
    //GET
    public List<BookingsModel> getBooking(){
        return repo.findAll();
    }

    //POST
    public String addBooking(BookingsModel obj){
        repo.save(obj);
        return "Bookings added";
    }

}