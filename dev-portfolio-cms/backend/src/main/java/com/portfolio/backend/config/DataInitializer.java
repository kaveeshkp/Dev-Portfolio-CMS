package com.portfolio.backend.config;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.portfolio.backend.entity.Project;
import com.portfolio.backend.entity.User;
import com.portfolio.backend.repository.ProjectRepository;
import com.portfolio.backend.repository.UserRepository;

@Configuration
public class DataInitializer {

    @SuppressWarnings("unused")
    @Bean
    CommandLineRunner initAdmin(UserRepository userRepository, ProjectRepository projectRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Ensure a known admin credential exists for local development.
            User adminUser = userRepository.findByEmail("admin@gmail.com")
                    .orElseGet(User::new);
            adminUser.setName("Admin");
            adminUser.setEmail("admin@gmail.com");
            adminUser.setPassword(passwordEncoder.encode("123456"));
            adminUser.setRole("ADMIN");
            userRepository.save(adminUser);

            // Initialize sample projects
            if (projectRepository.count() == 0) {
                Project project1 = new Project();
                project1.setTitle("Portfolio CMS");
                project1.setDescription("A full-stack portfolio management system built with Spring Boot and React. Features include project showcase, blog management, and admin dashboard for content control.");
                project1.setTechStack("Spring Boot, React, MySQL, JWT, Vite");
                project1.setGithubUrl("https://github.com/kaveeshkp");
                project1.setFeatured(true);
                project1.setPublished(true);
                project1.setCreatedAt(LocalDateTime.now());
                projectRepository.save(project1);

                Project project2 = new Project();
                project2.setTitle("E-Commerce Platform");
                project2.setDescription("A responsive e-commerce platform with product catalog, shopping cart, and payment integration. Includes admin panel for inventory management.");
                project2.setTechStack("React, Node.js, Express, MongoDB, Stripe");
                project2.setGithubUrl("https://github.com/kaveeshkp");
                project2.setFeatured(true);
                project2.setPublished(true);
                project2.setCreatedAt(LocalDateTime.now());
                projectRepository.save(project2);

                Project project3 = new Project();
                project3.setTitle("Task Management App");
                project3.setDescription("A collaborative task management application with real-time updates, user authentication, and task organization features.");
                project3.setTechStack("React, Firebase, JavaScript, Tailwind CSS");
                project3.setGithubUrl("https://github.com/kaveeshkp");
                project3.setFeatured(false);
                project3.setPublished(true);
                project3.setCreatedAt(LocalDateTime.now());
                projectRepository.save(project3);
            }

            // Normalize placeholder/missing GitHub URLs in existing records.
            projectRepository.findAll().forEach(project -> {
                boolean changed = false;

                String githubUrl = project.getGithubUrl();
                if (githubUrl == null || githubUrl.isBlank() || githubUrl.contains("github.com/yourname")) {
                    project.setGithubUrl("https://github.com/kaveeshkp");
                    changed = true;
                }

                // Ensure all existing admin projects are publicly visible.
                if (!project.isPublished()) {
                    project.setPublished(true);
                    changed = true;
                }

                if (changed) {
                    projectRepository.save(project);
                }
            });
        };
    }
}