package com.ssafy.star.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Information {
    @Id @GeneratedValue
    @Column(name = "information_id")
    private Long id;

    private String CommonSense;
}
