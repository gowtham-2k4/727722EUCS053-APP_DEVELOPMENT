package com.example.demo.Controller;

import com.example.demo.model.HallModel;
import com.example.demo.Service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/halls")
@CrossOrigin(origins = "http://localhost:3000")
public class HallController {

    @Autowired
    private HallService hallService;

    @GetMapping("/gethalls")
    public List<HallModel> getAllHalls() {
        return hallService.getAllHalls();
    }

    @GetMapping("gethalls/{id}")
    public ResponseEntity<HallModel> getHallById(@PathVariable Long id) {
        return hallService.getHallById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public List<HallModel> searchHallsByname(@RequestParam("hallname") String hallname){
        return hallService.findHallsByNameContaining(hallname);
    }

    @PostMapping("/addhall")
    public ResponseEntity<HallModel> createHall(@RequestBody HallModel hallModel) {
        HallModel createdHall = hallService.createHall(hallModel);
        return ResponseEntity.ok(createdHall);
    }

    @PutMapping("/updatehall/{hallId}")
    public ResponseEntity<HallModel> updateHall(@PathVariable Long hallId, @RequestBody HallModel hall) {
        HallModel updatedHall = hallService.updateHall(hallId, hall);
        return ResponseEntity.ok(updatedHall);
    }
   
    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/location/{city}")
    public List<HallModel> getHallsByLocation(@PathVariable String city) {
        return hallService.getHallsByLocation(city);
    }

    @GetMapping("/count")
    public Long getHallCount() {
    return hallService.getHallCount();

    
}
}
