package com.ssafy.star.controller;

import com.ssafy.star.db.dto.QuizDto;
import com.ssafy.star.db.entity.QuizRedis;
import com.ssafy.star.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;
    @GetMapping()
    public ResponseEntity<List<QuizDto>> getQuiz(){
        return new ResponseEntity<>(quizService.getQuiz(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<QuizRedis> putQuiz(@RequestBody QuizDto quizDto){
        return new ResponseEntity<>(quizService.putQuiz(quizDto),HttpStatus.OK);
    }
}
