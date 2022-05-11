package com.ssafy.star.db.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book extends BaseTimeEntity{
    @Id @GeneratedValue
    @Column(name = "book_id")
    private Long id;

    @Column(name = "book_title")
    private String title;

    @Column(name = "book_content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;
}
