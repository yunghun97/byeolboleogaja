package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Information;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InformationRepository extends JpaRepository<Information, Long> {
    @Override
    List<Information> findAll();

    @Override
    Optional<Information> findById(Long aLong);
}
