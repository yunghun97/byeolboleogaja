package com.ssafy.star.service;

import com.ssafy.star.db.dto.SatelliteDto;
import com.ssafy.star.db.entity.Satellite;
import com.ssafy.star.db.repository.SatelliteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SatelliteService {
    private final SatelliteRepository satelliteRepository;

    public ResponseEntity<?> getAllSatellites() {
        try {
            List<Satellite> satelliteList = satelliteRepository.findAll();
            List<SatelliteDto> satelliteDtoList = new ArrayList<>();

            for (Satellite satellite : satelliteList) {
                satelliteDtoList.add(SatelliteDto.convert(satellite));
            }

            return new ResponseEntity<>(satelliteDtoList, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> getSatellite(Long satelliteId) {
        try {
            Satellite satelliteById = satelliteRepository.findById(satelliteId).orElse(null);

            if(satelliteById == null) return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            SatelliteDto satelliteDto = SatelliteDto.convert(satelliteById);

            return new ResponseEntity<>(satelliteDto, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
