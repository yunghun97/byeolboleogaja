package com.ssafy.star.db.entity;

import com.ssafy.star.db.dto.QuizDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@RedisHash("quiz")
@Getter
@Setter
public class QuizRedis {
    @Id
    private Long id;
    private QuizDto quizDto;
}
