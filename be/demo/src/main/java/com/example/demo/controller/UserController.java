package com.example.demo.controller;

import com.example.demo.dto.request.UserDTO;
import com.example.demo.dto.response.ResponseData;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.prefix}/users")
@RequiredArgsConstructor
@Validated
@Slf4j
public class UserController {
    private final UserService userService;


    @PostMapping("/login")
    public ResponseData<?> login(@Valid @RequestBody UserDTO userDTO) {
        try {
            return new ResponseData<>(HttpStatus.OK.value(), "Login successful", this.userService.login(userDTO.getEmail(), userDTO.getPassword()));
        } catch (Exception e) {
            log.error("Can not login with email and password : {}", e.getMessage());
            return new ResponseData<>(HttpStatus.UNAUTHORIZED.value(), "Email or password is incorrect");
        }
    }

    @PostMapping("/register")
    public ResponseData<?> register(@Valid @RequestBody UserDTO userDTO) {
        try {
            this.userService.save(userDTO);
            log.info("User registered successfully");
            return new ResponseData<>(HttpStatus.OK.value(), "User registered successfully");

        } catch (Exception e) {
            log.error("Can not register : {}", e.getMessage());
            return new ResponseData<>(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
        }
    }
}
