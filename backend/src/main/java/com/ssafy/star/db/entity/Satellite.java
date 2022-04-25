package com.ssafy.star.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Satellite extends BaseTimeEntity{
    @Id @GeneratedValue
    @Column(name = "satellite_id")
    private Long id;

    @Column(name = "satellite_name")
    private String name;

    @Column(name = "satellite_desc")
    private String desc;

    @Column(name = "launch_date")
    private LocalDateTime launchDate;
}
