package com.ssafy.star.service;

import com.ssafy.star.db.repository.HoroscopeRedisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HoroscopeService {
    @Autowired
    HoroscopeRedisRepository horoscopeRedisRepository;
}
