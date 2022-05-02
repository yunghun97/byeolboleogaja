package com.ssafy.star.service;

import com.ssafy.star.db.dto.InformationDto;
import com.ssafy.star.db.entity.Information;
import com.ssafy.star.db.repository.InformationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class InformationService {
    private final InformationRepository informationRepository;

    public ResponseEntity<?> getRandomInformation() {
        try {
            List<Information> informationList = informationRepository.findAll();

            Random rand = new Random();
            int randVal = rand.nextInt(informationList.size());

            InformationDto informationDto = InformationDto.convert(informationList.get(randVal));

            return new ResponseEntity<>(informationDto, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
