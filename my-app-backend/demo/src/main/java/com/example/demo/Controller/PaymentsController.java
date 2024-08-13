package com.example.demo.Controller;

import com.example.demo.model.PaymentsModel;
import com.example.demo.Service.PaymentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentsController {

    @Autowired
    private PaymentsService paymentsService;

    @GetMapping("/getpayments")
    public List<PaymentsModel> getAllPayments() {
        return paymentsService.getAllPayments();
    }

    @GetMapping("getpaymentsid/{id}")
    public ResponseEntity<PaymentsModel> getPaymentById(@PathVariable int id) {
        return paymentsService.getPaymentById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/addpayments")
    public PaymentsModel createPayment(@RequestBody PaymentsModel payment) {
        return paymentsService.createPayment(payment);
    }

   

    @DeleteMapping("deletepayments/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable int id) {
        try {
            paymentsService.deletePayment(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
