package com.example.demo.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookingId;

    
    private Long userId;
    private Long hallId;
    private String firstName;
    private String lastName;
    private LocalDate startDate;
    private LocalTime startTime;
    
}