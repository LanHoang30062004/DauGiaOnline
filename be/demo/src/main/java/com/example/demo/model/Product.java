package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "starting_price")
    private String startingPrice;

    @Column(name = "auction_time")
    private Date auctionTime;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(fetch = FetchType.EAGER , cascade = CascadeType.ALL, mappedBy = "product")
    private List<ProductImage> productImages;

    @JsonBackReference
    @ManyToMany
    @JoinTable(
            name = "cart",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;
    public void addUser(ProductImage productImage) {
        if (productImages == null) {
            this.productImages = new ArrayList<>();
        }
        if (!this.productImages.contains(productImage)) { // Tránh thêm trùng lặp
            this.productImages.add(productImage);
            productImage.setProduct(this); // Thiết lập quan hệ hai chiều an toàn
        }
    }


}
