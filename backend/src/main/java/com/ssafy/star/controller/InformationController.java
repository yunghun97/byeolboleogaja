package com.ssafy.star.controller;

import com.ssafy.star.service.InformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/information")
@RequiredArgsConstructor
public class InformationController {

    private final InformationService informationService;

    @GetMapping
    public ResponseEntity<?> getRandomInformation() {
        return informationService.getRandomInformation();
    }
}
