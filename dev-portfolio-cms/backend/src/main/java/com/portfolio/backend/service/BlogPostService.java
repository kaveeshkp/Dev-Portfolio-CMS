package com.portfolio.backend.service;

import com.portfolio.backend.entity.BlogPost;
import com.portfolio.backend.repository.BlogPostRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BlogPostService {

    private final BlogPostRepository blogPostRepository;

    public BlogPostService(BlogPostRepository blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }

    public List<BlogPost> getPublishedPosts() {
        return blogPostRepository.findByPublishedTrue();
    }

    public List<BlogPost> getAllPosts() {
        return blogPostRepository.findAll();
    }

    public BlogPost getBySlug(String slug) {
        return blogPostRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Blog not found"));
    }

    public BlogPost createPost(BlogPost post) {
        post.setCreatedAt(LocalDateTime.now());
        return blogPostRepository.save(post);
    }

    public BlogPost updatePost(Long id, BlogPost updatedPost) {
        BlogPost post = blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog not found"));

        post.setTitle(updatedPost.getTitle());
        post.setSlug(updatedPost.getSlug());
        post.setContent(updatedPost.getContent());
        post.setPublished(updatedPost.isPublished());

        return blogPostRepository.save(post);
    }

    public void deletePost(Long id) {
        blogPostRepository.deleteById(id);
    }
}