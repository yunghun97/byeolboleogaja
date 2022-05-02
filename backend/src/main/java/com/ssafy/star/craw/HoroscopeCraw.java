package com.ssafy.star.craw;

import com.ssafy.star.db.entity.Horoscope;
import com.ssafy.star.db.repository.HoroscopeRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
@EnableScheduling
@Component
public class HoroscopeCraw {

    @Autowired
    HoroscopeRepository horoscopeRepository;

    private static String NAVER_LUCK_URL = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";
    private static final String[] STAR_CODES = {"물병자리","물고기자리","양자리","황소자리","쌍둥이자리","게자리","사자자리","처녀자리","천칭자리","전갈자리","사수자리","염소자리"};

//     초    |   분   |   시   |   일   |   월   |  요일  |   연도
//     0~59 | 0~59 | 0~23 | 1~31 | 1~12  |   0~6  | 생략가능
//    @Scheduled(cron="0,0,1,05 * ?", zone="Asia/Seoul")
    @Scheduled(cron="0 0 3 * * ?", zone="Asia/Seoul")
    public void crawlingLuck() {
        Document doc = null;
        for(int i=0; i<12; i++){
            try {
                System.out.println(LocalDate.now());
                doc = Jsoup.connect(NAVER_LUCK_URL+STAR_CODES[i]).get();
                Elements contents = doc.select("p._cs_fortune_text");
                Horoscope horoscope = Horoscope.builder()
                        .content(contents.get(0).text())
                        .category(STAR_CODES[i])
                        .build();
                horoscopeRepository.save(horoscope);
            }catch (Exception e){
                e.printStackTrace();
                System.out.println("오류 발생");
            }
        }

    }
}
