package kz.bitlab.finalproject.pagebuilder.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@Service
public class ImageUploadService {

    public Map<String, List<Object>> imageUploadService(MultipartFile file){
        List<Object> data = new ArrayList<>();
        Map<String, Object> image = new HashMap<>();

        String filename = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
        String filepath = "build/resources/main/static/images/" + filename;
        String src = "/images/"+filename;

        data.add(filepath);

        try {
            Files.write(Paths.get(filepath), file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        image.put("src", src);
        image.put("height", 100);
        image.put("width", 200);
        data.add(image);

        Map<String, List<Object>> response = new HashMap<>();
        response.put("data", data);
        return response;
    }
}
