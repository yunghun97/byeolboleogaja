package com.ssafy.star.db.dto;

import com.ssafy.star.db.entity.Information;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InformationDto {
    private String CommonSense;

    public static InformationDto convert(Information information) {
        if(information == null) return null;

        return InformationDto.builder()
                .CommonSense(information.getCommonSense())
                .build();
    }
}
