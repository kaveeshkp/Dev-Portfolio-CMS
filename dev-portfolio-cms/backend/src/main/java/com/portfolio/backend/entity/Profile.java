package com.portfolio.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String title;

    @Column(length = 2000)
    private String bio;

    private String location;
    private String email;
    private String githubUrl;
    private String linkedinUrl;
    private String resumeUrl;
    private String profileImage;
}