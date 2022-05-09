package com.ssafy.star.db.dto;

import com.ssafy.star.db.entity.Book;
import com.ssafy.star.db.entity.Category;
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

    private Category category;

    private LocalDateTime modifiedDate;

    public static BookDto convert(Book book) {
        if(book == null) return null;

        return BookDto.builder()
                .id(book.getId())
                .title(book.getTitle())
                .content(book.getContent())
                .category(book.getCategory())
                .modifiedDate(book.getModifiedDate())
                .build();
    }
}
