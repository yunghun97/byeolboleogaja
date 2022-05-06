package com.ssafy.star.common;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@PropertySource("classpath:globals/application-credentials.properties")
public class S3Uploader {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    public String bucket;

    public String upload(File uploadFile, String dirName) {
        String fileName = dirName + "/" + UUID.randomUUID() + uploadFile.getName() + ".jpg";

        String uploadImageUrl  = putS3(uploadFile, fileName);
        removeNewFile(uploadFile);
        return uploadImageUrl;
    }

    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(CannedAccessControlList.PublicRead));
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    private void removeNewFile(File targetFile) {
        if(targetFile.delete()) {
            System.out.println("로컬 파일 삭제에 성공했습니다.");
            return;
        }
        System.out.println("File 삭제에 실패했습니다.");
    }

    public File downloadImg(String imageUrl, String fileName) {
        URL url;
        InputStream is;
        OutputStream os;

        try {
            url = new URL(imageUrl);
            is = url.openStream();
            os = new FileOutputStream(fileName);
            byte[] buffer = new byte[1024 * 16];

            while(true) {
                int inputData = is.read(buffer);
                if(inputData == -1) break;
                os.write(buffer, 0, inputData);
            }

            is.close();
            os.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new File(fileName);
    }
}
