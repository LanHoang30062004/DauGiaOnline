package com.example.demo.service.impl;

import com.example.demo.dto.request.ProductDTO;
import com.example.demo.dto.response.PageResponse;
import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.ProductImage;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ProductImageRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private static final long MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    private static final String UPLOAD_DIR = "uploads";
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ProductImageRepository productImageRepository;

    @Override
    public List<ProductDTO> findAll() {
        return this.productRepository.findAll().stream().map((product -> {
            return ProductDTO.builder()
                    .name(product.getName())
                    .category(product.getCategory().getName())
                    .startingPrice(product.getStartingPrice())
                    .auctionTime(product.getAuctionTime())
                    .build();
        })).toList();
    }

    private List<String> handleUrlResource(List<ProductImage> productImages) {
        List<String> resources = new ArrayList<>();
        for (ProductImage productImage : productImages) {
            resources.add(productImage.getUrl());
        }
        return resources;
    }

    @Override
    public PageResponse<?> findAllBySearch(int page, int size, String sort, String search) {
        if (page > 0) page = page - 1;
        List<Sort.Order> orders = new ArrayList<>();
        if (sort != null && !sort.equals("")) {
            Pattern patter = Pattern.compile("(\\w+?)(:)(.*)");
            Matcher matcher = patter.matcher(sort);
            if (matcher.find()) {
                if (matcher.group(3).equalsIgnoreCase("asc")) {
                    orders.add(new Sort.Order(Sort.Direction.ASC, matcher.group(1)));
                } else {
                    orders.add(new Sort.Order(Sort.Direction.DESC, matcher.group(1)));
                }
            }
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(orders));
        Specification<Product> spec = (root, query, criteriaBuilder) -> {
            if (search != null && !search.equals("")) {
                String searchPattern = "%" + search + "%";
                return criteriaBuilder.or(
                        criteriaBuilder.like(root.get("name"), searchPattern)
                );
            }
            return criteriaBuilder.conjunction();
        };
        Page<Product> products = productRepository.findAll(spec, pageable);
        List<ProductDTO> productDTOS = products.getContent().stream().map((p) -> {
            return ProductDTO.builder()
                    .urlResources(this.handleUrlResource(p.getProductImages()))
                    .name(p.getName())
                    .category(p.getCategory().getName())
                    .startingPrice(p.getStartingPrice())
                    .auctionTime(p.getAuctionTime())
                    .build();
        }).toList();

        return PageResponse.builder()
                .items(productDTOS)
                .totalPages(products.getTotalPages())
                .pageNo(page)
                .pageSize(products.getSize())
                .build();
    }

    @Override
    public PageResponse<?> findProductByCategory(int page, int size, String sort, String name) throws Exception {
        if (page > 0) page = page - 1;
        String param = name.toLowerCase();
        Category category = this.categoryRepository.findByName(param).orElseThrow(() -> new Exception("Can not find category with name :" + param));
        List<Sort.Order> orders = new ArrayList<>();
        if (sort != null && !sort.equals("")) {
            Pattern patter = Pattern.compile("(\\w+?)(:)(.*)");
            Matcher matcher = patter.matcher(sort);
            if (matcher.find()) {
                if (matcher.group(3).equalsIgnoreCase("asc")) {
                    orders.add(new Sort.Order(Sort.Direction.ASC, matcher.group(1)));
                } else {
                    orders.add(new Sort.Order(Sort.Direction.DESC, matcher.group(1)));
                }
            }
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(orders));
        Specification<Product> spec = (root, query, criteriaBuilder) -> {
            if (category != null) {
                return criteriaBuilder.equal(root.get("category"), category);
            }
            return criteriaBuilder.conjunction();
        };
        Page<Product> products = productRepository.findAll(spec, pageable);
        List<ProductDTO> productDTOS = products.getContent().stream().map((p) -> {
            return ProductDTO.builder()
                    .urlResources(this.handleUrlResource(p.getProductImages()))
                    .name(p.getName())
                    .category(p.getCategory().getName())
                    .startingPrice(p.getStartingPrice())
                    .auctionTime(p.getAuctionTime())
                    .build();
        }).toList();
        return PageResponse.builder()
                .items(productDTOS)
                .totalPages(products.getTotalPages())
                .pageNo(page)
                .pageSize(products.getSize())
                .build();
    }

    @Override
    public ProductDTO addNewProduct(ProductDTO productDTO) throws Exception {
        Category category = this.categoryRepository.findByName(productDTO.getCategory().toLowerCase()).orElseThrow(() -> new Exception());
        Product product = Product.builder()
                .name(productDTO.getName())
                .startingPrice(productDTO.getStartingPrice())
                .auctionTime(productDTO.getAuctionTime())
                .category(category)
                .build();
        this.productRepository.save(product);
        return productDTO;
    }


    private String storeFile(MultipartFile file) throws IOException {
        // Làm sạch tên file và kiểm tra an toàn
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if (fileName.contains("..")) {
            throw new IOException("Invalid file path: " + fileName);
        }

        // Tạo tên file duy nhất
        String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;

        // Kiểm tra và tạo thư mục tải lên nếu chưa tồn tại
        Path uploadDir = Paths.get(UPLOAD_DIR);
        try {
            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }
        } catch (IOException e) {
            throw new IOException("Could not create upload directory", e);
        }

        // Sao chép file vào thư mục đích
        Path destination = uploadDir.resolve(uniqueFileName);
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

        return uniqueFileName;
    }

    public void handleUploadImage(List<MultipartFile> files, Long id) throws Exception {
        // Tìm product dựa vào ID
        Product product = this.productRepository.findById(id)
                .orElseThrow(() -> new Exception("Cannot find product with ID: " + id));

        // Kiểm tra danh sách file tải lên
        if (files == null || files.isEmpty()) {
            return; // Không có file nào để xử lý
        }

        List<ProductImage> productImages = this.productImageRepository.findByProductId(product.getId());
        int currentImageCount = productImages.size();

        for (MultipartFile file : files) {
            // Bỏ qua file null hoặc kích thước = 0
            if (file == null || file.getSize() == 0) {
                continue;
            }

            // Kiểm tra kích thước file
            if (file.getSize() > MAX_FILE_SIZE) {
                throw new Exception("File is too large! Maximum size is 10MB");
            }

            // Kiểm tra loại file (MIME type)
            if (file.getContentType() == null || !file.getContentType().startsWith("image/")) {
                throw new Exception("File must be an image");
            }

            // Giới hạn tối đa 6 hình ảnh
            if (currentImageCount < 6) {
                String filename = storeFile(file);

                // Tạo đối tượng ProductImage và liên kết với Product
                ProductImage productImage = ProductImage.builder()
                        .url(filename)
                        .product(product)
                        .build();
                product.addUser(productImage);
                currentImageCount++;
            }
        }

        // Lưu lại thay đổi của product
        this.productRepository.save(product);
    }

    @Override
    public UrlResource getImageByImageName(String url) throws MalformedURLException {
        Path path = Paths.get("uploads/" + url);
        UrlResource urlResource = new UrlResource(path.toUri());
        return urlResource;
    }

    @Override
    public ProductDTO getProductById(Long id) throws Exception {
        Product product = this.productRepository.findById(id).orElseThrow(() -> new Exception("Can not find product by id " + id));
        return ProductDTO.builder()
                .name(product.getName())
                .startingPrice(product.getStartingPrice())
                .auctionTime(product.getAuctionTime())
                .category(product.getCategory().getName())
                .urlResources(handleUrlResource(product.getProductImages()))
                .build();
    }

    @Override
    public void updateProduct(Long id, ProductDTO productDTO) throws Exception {
        Product product = this.productRepository.findById(id).orElseThrow(() -> new Exception("Can not find product by id " + id));
        product.setName(productDTO.getName());
        product.setStartingPrice(productDTO.getStartingPrice());
        product.setAuctionTime(productDTO.getAuctionTime());
        this.productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) throws Exception {
        Product product = this.productRepository.findById(id).orElseThrow(() -> new Exception("Can not find product by id " + id));
        product.getProductImages().stream().forEach((i) -> {
            Path path = Paths.get("uploads/" + i.getUrl());
            try {
                Files.delete(path);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        this.productRepository.delete(product);
    }

}
