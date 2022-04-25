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
public class Flag extends BaseTimeEntity {
    @Id @GeneratedValue
    @Column(name = "flag_id")
    private Long id;

    @Column(name = "flag_nickname")
    private String nickname;

    @Column(name = "flag_password")
    private String password;

    @Column(name = "flag_content")
    private String content;
}
