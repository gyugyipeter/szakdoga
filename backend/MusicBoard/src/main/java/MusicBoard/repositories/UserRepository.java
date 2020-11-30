package MusicBoard.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import MusicBoard.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserName(String userName);
}
