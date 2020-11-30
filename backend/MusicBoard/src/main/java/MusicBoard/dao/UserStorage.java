package MusicBoard.dao;

import MusicBoard.entities.User;
import MusicBoard.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserStorage {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> findById (Long id) {
        return userRepository.findById(id);
    }

    public void registerReturnUser(User user) {
        userRepository.save(user);
    }

    public Optional<User> findUsrByUsername(String username) {
        return userRepository.findByUserName(username);
    }

    public String getUsernameById(Long id) {
        User user = userRepository.findById(id).get();
        return user.getUserName();
    }
}
