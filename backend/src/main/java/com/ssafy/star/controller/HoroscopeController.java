package com.ssafy.star.controller;

import com.ssafy.star.db.entity.Horoscope;
import com.ssafy.star.service.HoroscopeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/horoscope")
public class HoroscopeController {
    @Autowired
    HoroscopeService horoscopeService;

    @GetMapping()
    public ResponseEntity<List<Horoscope>> getHoroscope(){

        return new ResponseEntity<>(horoscopeService.getHoroscope(), HttpStatus.OK);
    }
}
