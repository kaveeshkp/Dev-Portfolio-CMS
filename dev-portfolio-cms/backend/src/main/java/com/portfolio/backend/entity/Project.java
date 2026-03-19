package com.portfolio.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 3000)
    private String description;

    private String techStack;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl;
    private boolean featured;
    private boolean published;
    private LocalDateTime createdAt;
}