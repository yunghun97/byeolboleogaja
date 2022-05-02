package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.HoroscopeRedis;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface HoroscopeRedisRepository extends CrudRepository<HoroscopeRedis, String> {

}
