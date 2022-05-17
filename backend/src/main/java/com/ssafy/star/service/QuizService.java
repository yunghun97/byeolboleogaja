package com.ssafy.star.service;

import com.ssafy.star.db.dto.QuizDto;
import com.ssafy.star.db.entity.QuizRedis;
import com.ssafy.star.db.repository.QuizRedisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@RequiredArgsConstructor
public class QuizService {
//    private final RedisTemplate<String, String> redisTemplate;
    private final QuizRedisRepository quizRedisRepository;

    public List<QuizDto> getQuiz(){
        Random rand = new Random();
        int size = (int) quizRedisRepository.count();
        Set<Long> set = new HashSet<>();

        while(set.size()<3){ // 랜덤으로 3개 뽑기
            long index = Long.parseLong(String.valueOf(rand.nextInt(size)));
            set.add(index);
        }

        Iterator<Long> it = set.iterator();
        List<QuizDto> quizList = new ArrayList<>();
        while(it.hasNext()){
            Optional<QuizRedis> quizRedis =  quizRedisRepository.findById(it.next());
            quizRedis.ifPresent(redis -> quizList.add(redis.getQuizDto())); // 해당하는 값이 존재하면 즉 null이 아니면
        }
        return quizList;

    }
    public QuizRedis putQuiz(QuizDto quizDto){
        long index = quizRedisRepository.count();
        System.out.println(index);
        QuizRedis quizRedis = new QuizRedis();
        quizRedis.setId(index);
        quizRedis.setQuizDto(quizDto);
        return quizRedisRepository.save(quizRedis);
    }
}
