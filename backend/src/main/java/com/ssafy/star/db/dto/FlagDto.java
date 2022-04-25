package com.ssafy.star.db.dto;

import com.ssafy.star.db.entity.Flag;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FlagDto {
    private Long id;

    private String nickname;

    private String password;

    private String content;

    private LocalDateTime createdDate;

    public static FlagDto convert(Flag flag) {
        if(flag == null) return null;

        return FlagDto.builder()
                .id(flag.getId())
                .nickname(flag.getNickname())
                .password(flag.getPassword())
                .content(flag.getContent())
                .createdDate(flag.getCreatedDate())
                .build();
    }
}
