package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {
    @Column(name = "full_name")
    private String name ;

    @Column(name = "email")
    private String email ;

    @Column(name = "password")
    private String password ;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth ;

    @Column(name = "address")
    private String address ;

    @Column(name = "balance")
    private String balance ;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Role role ;

    @ManyToMany(mappedBy = "users")
    private List<Product> products ;
}
