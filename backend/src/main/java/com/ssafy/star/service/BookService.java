package com.ssafy.star.service;

import com.ssafy.star.db.dto.BookDto;
import com.ssafy.star.db.entity.Book;
import com.ssafy.star.db.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public ResponseEntity<?> getAllBooks() {
        try {
            List<Book> bookList = bookRepository.findAll();
            List<BookDto> bookDtoList = new ArrayList<>();

            for (Book book : bookList) {
                bookDtoList.add(BookDto.convert(book));
            }

            return new ResponseEntity<>(bookDtoList, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> getBook(Long bookId) {
        try {
            Book bookById = bookRepository.findById(bookId).orElse(null);

            if(bookById == null) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            BookDto bookDto = BookDto.convert(bookById);

            return new ResponseEntity<>(bookDto, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
