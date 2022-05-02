package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Horoscope;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

public interface HoroscopeRepository extends JpaRepository<Horoscope, Long> {
    List<Horoscope> findByCreatedDate(LocalDate date);
}
