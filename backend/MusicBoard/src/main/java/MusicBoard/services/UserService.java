package MusicBoard.services;

import MusicBoard.dao.UserStorage;
import MusicBoard.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserStorage userStorage;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userStorage.registerReturnUser(user);
    }

    public Optional<User> findUserByUsername(String username) {
        return userStorage.findByUsername(username);
    }
}
