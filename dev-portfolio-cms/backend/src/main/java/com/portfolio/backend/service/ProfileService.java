package com.portfolio.backend.service;

import com.portfolio.backend.entity.Profile;
import com.portfolio.backend.repository.ProfileRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Profile getProfile() {
        List<Profile> profiles = profileRepository.findAll();
        if (profiles.isEmpty()) {
            Profile profile = new Profile();
            profile.setFullName("");
            profile.setTitle("");
            profile.setBio("");
            profile.setLocation("");
            profile.setEmail("");
            profile.setGithubUrl("");
            profile.setLinkedinUrl("");
            profile.setResumeUrl("");
            profile.setProfileImage("");
            return profileRepository.save(profile);
        }
        return profiles.get(0);
    }

    public Profile updateProfile(Profile updatedProfile) {
        Profile profile = getProfile();
        profile.setFullName(updatedProfile.getFullName());
        profile.setTitle(updatedProfile.getTitle());
        profile.setBio(updatedProfile.getBio());
        profile.setLocation(updatedProfile.getLocation());
        profile.setEmail(updatedProfile.getEmail());
        profile.setGithubUrl(updatedProfile.getGithubUrl());
        profile.setLinkedinUrl(updatedProfile.getLinkedinUrl());
        profile.setResumeUrl(updatedProfile.getResumeUrl());
        profile.setProfileImage(updatedProfile.getProfileImage());

        return profileRepository.save(profile);
    }
}