package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Horoscope;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class HoroscopeQueryRepository extends QuerydslRepositorySupport {

    public HoroscopeQueryRepository() {
        super(Horoscope.class);
    }
}
