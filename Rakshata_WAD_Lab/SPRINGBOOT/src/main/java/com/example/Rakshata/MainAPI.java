package com.example.Rakshata;

import org.springframework.web.bind.annotation.RestController;

import com.example.Rakshata.dto.Entity.Teacherdetails;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class MainAPI {

    @GetMapping("/data")
    public Teacherdetails apidata() {

        Teacherdetails teacher = new Teacherdetails();

        teacher.setId(1);
        teacher.setName("rakshata");
        teacher.setSubject("Java");
        teacher.setAddress("vasco");

        return teacher;
    }
    

}