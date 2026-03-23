package com.portfolio.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.backend.entity.Project;
import com.portfolio.backend.repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getPublishedProjects() {
        return projectRepository.findByPublishedTrue();
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project createProject(Project project) {
        project.setCreatedAt(LocalDateTime.now());
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project updatedProject) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        project.setTitle(updatedProject.getTitle());
        project.setDescription(updatedProject.getDescription());
        project.setTechStack(updatedProject.getTechStack());
        project.setGithubUrl(updatedProject.getGithubUrl());
        project.setImageUrl(updatedProject.getImageUrl());
        project.setFeatured(updatedProject.isFeatured());
        project.setPublished(updatedProject.isPublished());

        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}