package com.portfolio.backend.controller;

import com.portfolio.backend.entity.Profile;
import com.portfolio.backend.service.ProfileService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public Profile getProfile() {
        return profileService.getProfile();
    }

    @PutMapping
    public Profile updateProfile(@RequestBody Profile profile) {
        return profileService.updateProfile(profile);
    }
}