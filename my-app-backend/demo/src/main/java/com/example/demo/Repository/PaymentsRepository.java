package com.example.demo.Repository;

import com.example.demo.model.PaymentsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentsRepository extends JpaRepository<PaymentsModel, Integer> {
}
