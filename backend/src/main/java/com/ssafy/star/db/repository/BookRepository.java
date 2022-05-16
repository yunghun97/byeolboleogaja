package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Book;
import com.ssafy.star.db.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Override
    List<Book> findAll();

    @Override
    Optional<Book> findById(Long bookId);

    List<Book> findAllByCategory(Category category);
}
