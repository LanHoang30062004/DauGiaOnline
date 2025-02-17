package com.example.demo.service;

import com.example.demo.dto.request.ProductDTO;
import com.example.demo.dto.request.UserChangeDTO;
import com.example.demo.dto.request.UserDTO;
import com.example.demo.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public void save(UserDTO user) throws Exception;

    public void updateUser(Long userId , UserChangeDTO user) throws Exception;
    public String login (String email, String password) throws Exception;
    List<ProductDTO> getProductsInCart(String email) throws NotFoundException;
    UserDTO getUserByEmail (String email) throws NotFoundException;
    List<UserDTO> getAllUsers() ;

}
