package com.ssafy.star.controller;

import com.ssafy.star.common.ApiKey;
import com.ssafy.star.common.S3Uploader;
import com.ssafy.star.config.S3Config;
import com.ssafy.star.db.dto.NasaDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.File;

@RestController
@EnableScheduling
@RequiredArgsConstructor
@RequestMapping("/api/file")
public class S3Controller {
    private final S3Uploader s3Uploader;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ApiKey apiKey;
    private final String NASA_APOD_API = "https://api.nasa.gov/planetary/apod?api_key={apikey}";

    @Scheduled(cron="0 0 13 * * ?", zone="Asia/Seoul")
    public void getUrl() {
        String serviceKey = apiKey.getApiKey();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<>(headers);

        NasaDto nasaDto = restTemplate.exchange(NASA_APOD_API, HttpMethod.GET, entity, NasaDto.class, serviceKey).getBody();

        File nasaImg = s3Uploader.downloadImg(nasaDto.getHdurl(), nasaDto.getTitle());
        s3Uploader.upload(nasaImg, "todayNASA");
    }
}

