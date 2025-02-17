package com.example.demo.controller;

import com.example.demo.dto.request.AuctionDTO;
import com.example.demo.dto.response.ResponseData;
import com.example.demo.service.AuctionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.prefix}/auction")
@Slf4j
@RequiredArgsConstructor
@Validated
public class AuctionController {
    private final AuctionService auctionService;
    @PostMapping("/place-bid")
    public ResponseData<?> placeBid(@Valid  @RequestBody AuctionDTO auctionDTO) {
         try {
             this.auctionService.placeBid(auctionDTO);
            log.info(" {} auctioned successful " , auctionDTO.getEmail());
            return new ResponseData<>(HttpStatus.OK.value() , auctionDTO.email + "auctioned successful") ;
         }
         catch (Exception e) {
             log.error("Error in place bid", e);
             return new ResponseData<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Have error in place bid :" + e.getMessage());
         }
    }
}
