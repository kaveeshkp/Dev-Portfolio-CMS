package com.portfolio.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.backend.entity.BlogPost;
import com.portfolio.backend.service.BlogPostService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogPostController {

    private final BlogPostService blogPostService;

    public BlogPostController(BlogPostService blogPostService) {
        this.blogPostService = blogPostService;
    }

    // PUBLIC
    @GetMapping("/blogs")
    public List<BlogPost> getPublishedPosts() {
        return blogPostService.getPublishedPosts();
    }

    @GetMapping("/blogs/{slug}")
    public BlogPost getBySlug(@PathVariable String slug) {
        return blogPostService.getBySlug(slug);
    }

    // ADMIN
    @GetMapping("/admin/blogs")
    public List<BlogPost> getAllPosts() {
        return blogPostService.getAllPosts();
    }

    @PostMapping("/admin/blogs")
    public BlogPost createPost(@RequestBody BlogPost post) {
        return blogPostService.createPost(post);
    }

    @PutMapping("/admin/blogs/{id}")
    public BlogPost updatePost(@PathVariable Long id, @RequestBody BlogPost post) {
        return blogPostService.updatePost(id, post);
    }

    @DeleteMapping("/admin/blogs/{id}")
    public void deletePost(@PathVariable Long id) {
        blogPostService.deletePost(id);
    }
}