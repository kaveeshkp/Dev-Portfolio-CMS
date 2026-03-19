package com.portfolio.backend.repository;

import com.portfolio.backend.entity.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    List<BlogPost> findByPublishedTrue();
    Optional<BlogPost> findBySlug(String slug);
}