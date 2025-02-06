package com.example.demo.service.impl;

import com.example.demo.dto.request.UserChangeDTO;
import com.example.demo.dto.request.UserDTO;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.util.JWTToken;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final AuthenticationManager authenticationManager;
    private final JWTToken jwtToken;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void save(UserDTO userDTO) throws Exception {
        User user = this.userRepository.findByEmail(userDTO.getEmail()).orElse(null);
        Role role = this.roleRepository.findById(1L).orElse(null);
        if (user != null) {
            throw new Exception("User is exist");
        }
        User newUser = User.builder()
                .address(userDTO.getAddress())
                .role(role)
                .email(userDTO.getEmail())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .fullName(userDTO.getFullName())
                .dateOfBirth(userDTO.getDateOfBirth())
                .build();
        this.userRepository.save(newUser);
    }

    @Override
    public void updateUser(Long userId , UserChangeDTO userDTO) throws Exception {
        User user = this.userRepository.findById(userId).orElseThrow(()-> new NotFoundException("User not found with id :" + userId ));
        user.setFullName(userDTO.getFullName());
        user.setDateOfBirth(userDTO.getDateOfBirth());
        user.setEmail(userDTO.getEmail());
        user.setAddress(userDTO.getAddress());
        user.setBalance(user.getBalance());
        this.userRepository.save(user);
    }

    @Override
    public String login (String email, String password) throws Exception {
        User user = this.userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        if (!this.passwordEncoder.matches(password,user.getPassword())) {
            throw new BadCredentialsException("Wrong password");
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user.getEmail(), password ,user.getAuthorities());
        this.authenticationManager.authenticate(authenticationToken);
        String token = this.jwtToken.generateToken(user) ;
        return token;
    }
}
