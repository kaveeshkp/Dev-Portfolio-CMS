package com.portfolio.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.backend.entity.ContactMessage;
import com.portfolio.backend.service.ContactMessageService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactMessageController {

    private final ContactMessageService contactMessageService;

    public ContactMessageController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    // PUBLIC - anyone can submit a contact message
    @PostMapping("/contact")
    public ContactMessage saveMessage(@RequestBody ContactMessage message) {
        return contactMessageService.saveMessage(message);
    }

    // ADMIN - only admin can view messages
    @GetMapping("/admin/messages")
    public List<ContactMessage> getAllMessages() {
        return contactMessageService.getAllMessages();
    }
}