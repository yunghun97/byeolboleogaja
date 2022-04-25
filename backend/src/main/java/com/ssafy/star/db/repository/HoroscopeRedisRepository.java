package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Horoscope;
import org.springframework.data.repository.CrudRepository;

public interface HoroscopeRedisRepository extends CrudRepository<Horoscope, String> {

}
