package com.example.sarafan.service;

import com.example.sarafan.domain.Comment;
import com.example.sarafan.domain.User;
import com.example.sarafan.repo.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepo commentRepo;

    @Autowired
    public CommentService(CommentRepo commentRepo) {
        this.commentRepo = commentRepo;
    }

    public Comment create(Comment comment, User user)
    {
        comment.setAuthor(user);
        return commentRepo.save(comment);
    }
}