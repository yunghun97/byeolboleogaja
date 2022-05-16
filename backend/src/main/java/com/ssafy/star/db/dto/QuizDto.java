package com.ssafy.star.db.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QuizDto {
    private String question;
    private boolean answer;
    private String description;
}
