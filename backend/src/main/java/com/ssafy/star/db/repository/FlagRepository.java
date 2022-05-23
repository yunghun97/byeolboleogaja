package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Flag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlagRepository extends JpaRepository<Flag, Long> {
    @Override
    List<Flag> findAll();

    List<Flag> findAllByOrderByCreatedDateDesc();

    List<Flag> findTop10ByOrderByCreatedDate();
}
