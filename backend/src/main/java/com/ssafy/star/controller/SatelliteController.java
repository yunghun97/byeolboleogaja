package com.ssafy.star.controller;

import com.ssafy.star.service.SatelliteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/museum")
public class SatelliteController {
    private final SatelliteService satelliteService;

    @GetMapping
    public ResponseEntity<?> getAllSatellites() {
        return satelliteService.getAllSatellites();
    }

    @GetMapping("/{satelliteId}")
    public ResponseEntity<?> getSatellite(@PathVariable Long satelliteId) {
        return satelliteService.getSatellite(satelliteId);
    }
}
