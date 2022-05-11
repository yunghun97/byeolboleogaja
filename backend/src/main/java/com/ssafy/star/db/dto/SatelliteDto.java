package com.ssafy.star.db.dto;

import com.ssafy.star.db.entity.Satellite;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SatelliteDto {
    private Long id;

    private String name;

    private String desc;

    private LocalDateTime launchDate;

    private LocalDateTime modifiedDate;

    public static SatelliteDto convert(Satellite satellite) {
        if(satellite == null) return null;
        return SatelliteDto.builder()
                .id(satellite.getId())
                .name(satellite.getName())
                .desc(satellite.getDesc())
                .launchDate(satellite.getLaunchDate())
                .modifiedDate(satellite.getModifiedDate())
                .build();
    }
}
