package com.example.demo.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.io.UrlResource;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
public class ProductDTO {
    @NotBlank(message = "name must be not blank")
    private String name;

    @NotBlank(message = "startingPrice must be not blank")
    private String startingPrice;

    @NotNull(message = "dateOfBirth must be not null")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "MM/dd/yyyy")
    private Date auctionTime;

    @NotBlank(message = "category must be not blank")
    private String category;

    private List<String> urlResources = new ArrayList<>();



}
