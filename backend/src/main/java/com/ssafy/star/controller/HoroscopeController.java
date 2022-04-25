package com.ssafy.star.controller;

import com.ssafy.star.service.HoroscopeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/horoscope")
public class HoroscopeController {
    @Autowired
    HoroscopeService horoscopeService;
}
