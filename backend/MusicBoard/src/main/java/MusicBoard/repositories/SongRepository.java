package MusicBoard.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import MusicBoard.entities.Song;

public interface SongRepository extends JpaRepository<Song, Long> {
    Optional<Song> findBySongName(String songName); //optional?
}
