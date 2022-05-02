package com.ssafy.star.craw;

import com.ssafy.star.db.repository.HoroscopeRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

public class HoroscopeCraw {

    @Autowired
    HoroscopeRepository horoscopeRepository;

    private static String NAVER_LUCK_URL = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";
    private static final String[] STAR_CODES = {"물병자리","물고기자리","양자리","황소자리","쌍둥이자리","게자리","사자자리","처녀자리","천칭자리","전갈자리","사수자리","염소자리"};

    public String crawlingLuck() {
        StringBuilder sb = new StringBuilder();
        Document doc = null;
        LocalDate date = LocalDate.now();

        for(int i=0; i<12; i++){
            try {
                doc = Jsoup.connect(NAVER_LUCK_URL+STAR_CODES[i]).get();
                Elements contents = doc.select("p._cs_fortune_text");
                sb.append(STAR_CODES[i]);
                sb.append(" 오늘의 운세 : ");
                sb.append(contents.get(0).text());
                sb.append("\n");
                // get(0) 오늘의 운세 1 : 내일의 운세 2 : 이주의 운세 3 : 이달의 운세
            }catch (Exception e){
                e.printStackTrace();
                System.out.println("오류 발생");
            }
        }
        return sb.toString();
    }
}
