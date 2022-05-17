package com.ssafy.star.service;

import com.ssafy.star.db.entity.Horoscope;
import com.ssafy.star.db.repository.HoroscopeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HoroscopeService {

    private final HoroscopeRepository horoscopeRepository;

    public List<Horoscope> getHoroscope(){
        LocalDate date = LocalDate.now();
        return horoscopeRepository.findByCreatedDate(date);
    }
}
