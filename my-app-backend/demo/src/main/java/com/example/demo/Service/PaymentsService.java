package com.example.demo.Service;

import com.example.demo.model.PaymentsModel;
import com.example.demo.Repository.PaymentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentsService {

    @Autowired
    private PaymentsRepository paymentsRepository;

    public List<PaymentsModel> getAllPayments() {
        return paymentsRepository.findAll();
    }

    public Optional<PaymentsModel> getPaymentById(int id) {
        return paymentsRepository.findById(id);
    }

    public PaymentsModel createPayment(PaymentsModel payment) {
        return paymentsRepository.save(payment);
    }

    // public PaymentsModel updatePayment(int id, PaymentsModel paymentDetails) {
    //     PaymentsModel payment = paymentsRepository.findById(id).orElseThrow(() -> new RuntimeException("Payment not found"));
    //     payment.setBooking_id(paymentDetails.getBooking_id());
    //     payment.setPrice(paymentDetails.getPrice());
    //     payment.setPaymentMethod(paymentDetails.getPaymentMethod());
    //     payment.setPaymentStatus(paymentDetails.getPaymentStatus());
    //     payment.setTransactionId(paymentDetails.getTransactionId());
    //     payment.setPaymentDate(paymentDetails.getPaymentDate());
    //     return paymentsRepository.save(payment);
    // }

    public void deletePayment(int id) {
        PaymentsModel payment = paymentsRepository.findById(id).orElseThrow(() -> new RuntimeException("Payment not found"));
        paymentsRepository.delete(payment);
    }
}
