package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Horoscope;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HoroscopeRepository extends JpaRepository<Horoscope, Long> {
}
