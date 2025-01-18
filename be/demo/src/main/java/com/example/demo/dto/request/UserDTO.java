package com.example.demo.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class UserDTO implements Serializable {
    @Email
    @NotBlank(message = "Can not leave email is blank")
    private String email;

    @NotBlank(message = "Can not leave password is blank")
    private String password;

    private String retypePassword;

    private String fullName;

    private String address;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate dateOfBirth;


}
