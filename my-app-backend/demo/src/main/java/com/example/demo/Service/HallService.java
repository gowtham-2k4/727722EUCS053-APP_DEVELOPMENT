package com.example.demo.Service;

import com.example.demo.model.HallModel;
import com.example.demo.Repository.HallsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HallService {

    @Autowired
    private HallsRepository hallRepository;

    public List<HallModel> getAllHalls() {
        return hallRepository.findAll();
    }

    public Optional<HallModel> getHallById(Long id) {
        return hallRepository.findById(id);
    }

    public HallModel createHall(HallModel hallModel) {
        return hallRepository.save(hallModel);
    }

    public HallModel updateHall(Long hallId, HallModel updatedHall) {
        Optional<HallModel> optionalHall = hallRepository.findById(hallId);

        if (optionalHall.isPresent()) {
            HallModel existingHall = optionalHall.get();
            existingHall.setHallname(updatedHall.getHallname());
            existingHall.setPrice(updatedHall.getPrice());
            existingHall.setCapacity(updatedHall.getCapacity());
            existingHall.setCity(updatedHall.getCity());
            existingHall.setAddress(updatedHall.getAddress());
            existingHall.setDescription(updatedHall.getDescription());
            existingHall.setRating(updatedHall.getRating());

            return hallRepository.save(existingHall);
        } else {
            throw new RuntimeException("Hall not found with id: " + hallId);
        }
    }


    public void deleteHall(Long id) {
        hallRepository.deleteById(id);
    }

    public List<HallModel> getHallsByLocation(String city) {
        return hallRepository.findByCity(city);
    }

    public Long getHallCount() {
        return hallRepository.count();
    }

    public List<HallModel> findHallsByNameContaining(String hallname) {
        return hallRepository.findByHallnameContainingIgnoreCase(hallname);
    }
}
