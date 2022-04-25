package com.ssafy.star.db.dto;

import com.ssafy.star.db.entity.Book;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookDto {
    private Long id;

    private String title;

    private String content;

    private LocalDateTime modifiedDate;

    public static BookDto convert(Book book) {
        if(book == null) return null;

        return BookDto.builder()
                .id(book.getId())
                .title(book.getTitle())
                .content(book.getContent())
                .modifiedDate(book.getModifiedDate())
                .build();
    }
}
