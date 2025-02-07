package com.example.demo.controller;

import com.example.demo.dto.request.ProductDTO;
import com.example.demo.dto.request.UserChangeDTO;
import com.example.demo.dto.request.UserDTO;
import com.example.demo.dto.response.ResponseData;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/users")
@RequiredArgsConstructor
@Validated
@Slf4j
public class UserController {
    private final UserService userService;


    @GetMapping("/cart/{id}")
    public ResponseData<?> getUser(@PathVariable Long id) {
        try {
            List<ProductDTO> result = this.userService.getProductsInCart(id) ;
            log.info("Get products in cart successful with user id : {}" , id) ;
            return new ResponseData<>(HttpStatus.OK.value(),"Get products in cart successful" , result);
        }
        catch (Exception e) {
            log.error("Get products in cart failed : {}", e.getMessage());
            return new ResponseData<>(HttpStatus.INTERNAL_SERVER_ERROR.value() , e.getMessage());
        }
    }

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

    @PutMapping("/{id}")
    public ResponseData<?> updateUser(@PathVariable Long id, @Valid @RequestBody UserChangeDTO userChangeDTO) {
        try {
            this.userService.updateUser(id, userChangeDTO);
            log.info("User updated successful with id : {}", id);
            return new ResponseData<>(HttpStatus.OK.value(), "User updated successfully with id : " + id);
        } catch (Exception e) {
            log.error("Can not update user : {}", e.getMessage());
            return new ResponseData<>(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
        }
    }
}
