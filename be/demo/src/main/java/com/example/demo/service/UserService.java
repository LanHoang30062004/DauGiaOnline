package com.example.demo.service;

import com.example.demo.dto.request.UserChangeDTO;
import com.example.demo.dto.request.UserDTO;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public void save(UserDTO user) throws Exception;

    public void updateUser(Long userId , UserChangeDTO user) throws Exception;
    public String login (String email, String password) throws Exception;
}
