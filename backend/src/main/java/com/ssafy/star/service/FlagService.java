package com.ssafy.star.service;

import com.ssafy.star.db.dto.FlagDto;
import com.ssafy.star.db.entity.Flag;
import com.ssafy.star.db.repository.FlagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FlagService {
    private final FlagRepository flagRepository;

    public ResponseEntity<?> addFlag(FlagDto flagDto) {
        try {
            if("".equals(flagDto.getNickname().trim()) || flagDto.getNickname() == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            Flag flag = Flag.builder()
                    .nickname(flagDto.getNickname())
                    .content(flagDto.getContent())
                    .password(flagDto.getPassword())
                    .build();

            Flag savedFlag = flagRepository.save(flag);
            FlagDto savedFlagDto = FlagDto.convert(savedFlag);

            return new ResponseEntity<>(savedFlagDto, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> getFlags(String sortOption) {
        try {
            List<Flag> flagList = ("all".equals(sortOption.toLowerCase())) ? flagRepository.findAll() : flagRepository.findTop10ByOrderByCreatedDate();
            List<FlagDto> flagDtoList = new ArrayList<>();

            for (Flag flag : flagList) {
                flagDtoList.add(FlagDto.convert(flag));
            }

            return new ResponseEntity<>(flagDtoList, HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
