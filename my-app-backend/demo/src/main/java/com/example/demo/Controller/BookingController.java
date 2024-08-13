package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BookingsModel;
import com.example.demo.Service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    public BookingService service;
        
        @GetMapping("/getbooking")
        public List<BookingsModel> getBooking(){
            return service.getBooking();
        }

        @PostMapping("/addbooking")
        public String addBooking(@RequestBody BookingsModel model){
            service.addBooking(model);
            return "Bookings added";
        }

}