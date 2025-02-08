package com.example.demo.dto.request;

import com.example.demo.util.anotations.ValidTimeFormat;
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
    private Long id;

    @NotBlank(message = "name must be not blank")
    private String name;

    private Long startingPrice;

    @NotBlank(message = "startingPrice must be not blank")
    @ValidTimeFormat(message = "Auction time is incorrect format")
    private String auctionTime;

    @NotBlank(message = "category must be not blank")
    private String category;

    private List<String> urlResources = new ArrayList<>();

}
