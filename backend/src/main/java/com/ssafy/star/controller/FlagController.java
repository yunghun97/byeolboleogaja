package com.ssafy.star.controller;

import com.ssafy.star.db.dto.FlagDto;
import com.ssafy.star.service.FlagService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/flag")
public class FlagController {
    private final FlagService flagService;

    @PostMapping
    public ResponseEntity<?> addFlag(@RequestBody FlagDto flagDto) {
        return flagService.addFlag(flagDto);
    }

    @GetMapping("/{sortOptions}")
    public ResponseEntity<?> getFlags(@PathVariable String sortOptions) {
        return flagService.getFlags(sortOptions);
    }
}
