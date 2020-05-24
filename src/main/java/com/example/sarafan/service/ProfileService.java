package com.example.sarafan.service;

import com.example.sarafan.domain.User;
import com.example.sarafan.domain.UserSubscription;
import com.example.sarafan.repo.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProfileService {
    private final UserDetailsRepo userDetailsRepo;

    @Autowired
    public ProfileService(UserDetailsRepo userDetailsRepo) {
        this.userDetailsRepo = userDetailsRepo;
    }

    public User changeSubscription(User channel, User subscriber) {
        List<UserSubscription> subscriptions = channel.getSubscribers()
                .stream()
                .filter(subscription ->
                        subscription.getSubscriber().equals(subscriber))
                .collect(Collectors.toList());
        if(subscriptions.isEmpty())
        {
          UserSubscription userSubscription = new UserSubscription(channel, subscriber);
          channel.getSubscribers().add(userSubscription);
        }
        else
        {
           channel.getSubscribers().removeAll(subscriptions);
        }
        return userDetailsRepo.save(channel);
    }
}
