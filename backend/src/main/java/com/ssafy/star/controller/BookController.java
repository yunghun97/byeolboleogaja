package com.ssafy.star.controller;

import com.ssafy.star.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/library")
public class BookController {
    private final BookService bookService;

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{bookId}")
    public ResponseEntity<?> getBook(@PathVariable Long bookId) {
        return bookService.getBook(bookId);
    }

    @GetMapping(params = {"category"})
    public ResponseEntity<?> getAllBooksByCategory(@RequestParam String category) {
        return bookService.getAllBooksByCategory(category);
    }
}
