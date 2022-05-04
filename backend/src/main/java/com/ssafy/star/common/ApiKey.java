package com.ssafy.star.common;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@Getter
@PropertySource("classpath:globals/application-API-KEY.properties")
public class ApiKey {
    @Value("${shortweather-key}")
    private String apiKey;
}
