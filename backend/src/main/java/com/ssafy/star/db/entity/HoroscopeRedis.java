package com.ssafy.star.db.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.redis.core.RedisHash;

import javax.persistence.Id;
import java.util.HashMap;

@RedisHash("horoscope")
@Getter
@Setter
public class HoroscopeRedis {
    @Id
    private String id;
    private String category;
    private String content;
    private HashMap<String, String> hashMap;

    public HoroscopeRedis(){

    }

}
