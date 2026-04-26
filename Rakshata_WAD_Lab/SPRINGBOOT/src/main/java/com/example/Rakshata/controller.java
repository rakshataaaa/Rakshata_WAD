package com.example.Rakshata;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {
    @GetMapping("/about")
    public String getMethodName(){
        return "index3";
    } 
    
}   