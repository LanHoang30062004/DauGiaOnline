package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "transaction")
public class Transaction extends BaseEntity {

    @Column(name = "transaction_id")
    private String transactionId;
}
